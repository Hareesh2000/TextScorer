from django.urls import path
from .views import TextScoreHistoryAPI, TextScoringAPI

urlpatterns = [
    path('score-text/', TextScoringAPI.as_view(), name='score-text'),
    path('text-scores/', TextScoreHistoryAPI.as_view(), name='text-scores'),
]