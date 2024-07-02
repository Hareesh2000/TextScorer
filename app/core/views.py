from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import TextScoreSerializer
from transformers import AutoTokenizer, AutoModelForSequenceClassification
import torch
import numpy as np

class TextScoringAPI(APIView):
    def post(self, request):
        serializer = TextScoreSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        text = serializer.validated_data['text']

        # Load the Vectara model
        vectara_model = AutoModelForSequenceClassification.from_pretrained('vectara/hallucination_evaluation_model')
        vectara_tokenizer = AutoTokenizer.from_pretrained('vectara/hallucination_evaluation_model')

        inputs = vectara_tokenizer.batch_encode_plus([text], return_tensors='pt', padding=True)

        vectara_model.eval()
        with torch.no_grad():
            outputs = vectara_model(**inputs)
            logits = outputs.logits.cpu().detach().numpy()
            # convert logits to probabilities
            vectara_score = 1 / (1 + np.exp(-logits)).flatten()

        # Load the Education model
        education_tokenizer = AutoTokenizer.from_pretrained("HuggingFaceTB/fineweb-edu-classifier")
        education_model = AutoModelForSequenceClassification.from_pretrained("HuggingFaceTB/fineweb-edu-classifier")

        # Calculate the Education score
        education_inputs = education_tokenizer([text], return_tensors="pt", padding="longest", truncation=True)
        education_outputs = education_model(**education_inputs)
        education_logits = education_outputs.logits.squeeze(-1).float().detach().numpy()
        education_score = education_logits.item()

        # Save the scored text to the database
        text_score = serializer.save(
            vectara_score=vectara_score[0],
            education_score=education_score,
        )

        return Response(TextScoreSerializer(text_score).data)