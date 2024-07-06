# TextScorer

Get scores calculated for the given text with Vectara and Education machine learning models

# Architecture

REST API: The REST API is built using Python and the Django REST Framework. It is responsible for receiving the text input, scoring it using the Vectara and Education machine learning models, logging the text and scores to the database, and returning the scores to the client.
Web UI: The web UI is built using React. It provides an interface for users to interact with the application, allowing them to input text and view the scored results.
Database: The database used in this project is PostgreSQL. It is used to store the received text and the corresponding scores returned by the machine learning models.
The user interacts with the web UI, entering text to be scored. The web UI sends a POST request to the REST API endpoint (/api/score-text/) with the text data in the request body. The REST API receives the request, extracts the text data, and passes it to the Vectara and Education machine learning models to obtain the scores. The REST API logs the received text and the calculated scores to the Postgres database. The REST API returns the scores to the web UI in the response. The web UI receives the scores from the REST API and displays them to the user. The web UI also makes GET requests to the REST API (/api/text-scores/) to retrieve the logged scores and displays table.
Technologies Used
Python, Django REST Framework, React, PostgreSQL, Docker

# Build Instructions

Install Docker and Docker Compose
docker-compose build
docker-compose up

# API Documentation

Endpoint: /api/score-text/
Method: POST
Request Body: { "text": "Your text to be scored" }
Response: { "vectara_score": , "education_score": }
Endpoint: /api/text-scores/
Method: GET
Response: {“id”: , “text”: , "vectara_score": , "education_score": , “created_at”: }
