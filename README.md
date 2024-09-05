# Insight: Learning Resource Generator

This project allows users to generate learning resources such as summaries, flashcards, and quizzes from different input formats like documents and audio files. The generated content can be exported and shared, offering versatile educational support across multiple subjects.

## Table of Contents
1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Prerequisites](#prerequisites)
4. [Local Setup Instructions](#local-setup-instructions)
5. [Running the Application](#running-the-application)

## Project Overview

The project processes documents and media files to create study material using AI techniques. It supports:
- Text and audio-to-summary conversion
- Flashcard and quiz generation
- Exporting of results as `.docx` files

## Features
- Input text, audio, or files to generate learning resources
- Export content as `.docx` files
- User-friendly interface with responsive design

## Prerequisites

Ensure you have the following installed on your system:

1. Python 3.10+
2. Node.js (v16+ recommended)
3. npm (Node package manager)
4. Google Cloud SDK (configured for Speech-to-Text)
5. Google Cloud service account JSON file

## Local Setup Instructions

Follow these steps to get the project running locally:

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/insight.git
cd insight
```

### 2. Create a Python Virtual Environment

```bash
cd backend
python3 -m venv venv
source venv/bin/activate
```

### 3. Install Backend Dependencies

Install all the necessary Python dependencies using `requirements.txt`:

```bash
pip install -r requirements.txt
```

### 4. Install Frontend Dependencies

```bash
cd ../frontend
npm install
```

### 5. Configure Google Cloud Credentials

To run this project, you need to set up your own Google Cloud credentials. Here's how:

1. **Create a Google Cloud Project**
   - Go to the [Google Cloud Console](https://console.cloud.google.com/).
   - Create a new project or select an existing one.

2. **Enable Required APIs**
   - Enable the following APIs:
     - Speech-to-Text API
     - Cloud Storage API

3. **Create a Service Account**
   - Go to **IAM & Admin > Service Accounts**.
   - Create a new service account and download the JSON key. 

4. **Set Up Your Environment**
   - Place the downloaded JSON key (e.g., `your-service-account-key.json`) in the `backend` folder.
   - Update the path to this file in your `speech_to_text.py` script, if necessary:

   ```python
   credentials = service_account.Credentials.from_service_account_file('your-service-account-key.json')
   ```

   - Set the environment variable in your `.bashrc` file to point to this key:

   ```bash
   export GOOGLE_APPLICATION_CREDENTIALS="/path/to/your-service-account-key.json"
   ```

   - Reload the `.bashrc` file to apply changes:

   ```bash
   source ~/.bashrc
   ```

### 6. Create `.env` Files

In the `backend` folder, create a `.env` file to store any environment variables such as API keys or sensitive information.

```bash
touch .env
```

## Running the Application

### 1. Run the Backend

```bash
cd backend
source venv/bin/activate
python backend.py
```

This will start the Flask development server on `http://127.0.0.1:5000`.

### 2. Run the Frontend

In a new terminal, run the following commands:

```bash
cd frontend
npm run dev
```

This will start the frontend on `http://localhost:3000`.

### 3. Access the Application

Open your browser and navigate to:

```bash
http://localhost:3000
```

You should now be able to interact with the web application.
