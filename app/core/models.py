from django.db import models

class TextScore(models.Model):
    text = models.TextField()
    vectara_score = models.FloatField()
    education_score = models.FloatField()
    created_at = models.DateTimeField(auto_now_add=True)

    
