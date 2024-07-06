FROM python:3.11-slim
LABEL maintainer="hareesh"

ENV PYTHONUNBUFFERED 1

# Install system dependencies
RUN apt-get update && apt-get install -y --no-install-recommends \
    build-essential libpq-dev && \
    apt-get clean && rm -rf /var/lib/apt/lists/*

# Create a virtual environment
RUN python -m venv /py && /py/bin/pip install --upgrade pip

# Copy requirements.txt and install dependencies
COPY ./requirements.txt /tmp/requirements.txt
RUN /py/bin/pip install -r /tmp/requirements.txt

# Copy the application code
COPY . /app
WORKDIR /app

# Expose the port the app runs on
EXPOSE 8000

# Set the path to the virtual environment
ENV PATH="/py/bin:$PATH"

