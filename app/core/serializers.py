from rest_framework import serializers
from .models import TextScore

class TextScoreSerializer(serializers.ModelSerializer):
    class Meta:
        model = TextScore
        fields = [
            'id',
            'text',
            'vectara_score',
            'education_score',
            'created_at'
        ]
        read_only_fields = ['vectara_score', 'education_score', 'created_at']
        
    def create(self, validated_data):
        validated_data['vectara_score'] = validated_data.get('vectara_score', 0.0)
        validated_data['education_score'] = validated_data.get('education_score', 0.0)
        return super().create(validated_data)