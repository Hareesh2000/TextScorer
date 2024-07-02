from django.urls import path
from .views import TextScoringAPI

urlpatterns = [
    path('score-text/', TextScoringAPI.as_view(), name='score-text'),
]