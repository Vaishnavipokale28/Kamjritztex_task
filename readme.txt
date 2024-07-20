# Intelligent Transaction Monitoring Platform

This project is an Intelligent Transaction Monitoring Platform that provides real-time monitoring and fraud detection for transactions. It consists of three main components: a Spring Boot backend, a React frontend, and a Python-based machine learning module.

## Table of Contents
- [Getting Started](#getting-started)
- [Backend (Spring Boot)](#backend-spring-boot)
- [Frontend (React)](#frontend-react)
- [Machine Learning (Python)](#machine-learning-python)
- [Available Scripts](#available-scripts)
- [Learn More](#learn-more)

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites
- Java 8 or later
- Node.js and npm
- Python 3.8
- MySQL database

### Installation

1. Clone the repository
    sh
    git clone https://github.com/your-username/transaction-monitoring.git
    

2. Navigate to the project directory
    sh
    cd transaction-monitoring
    

## Backend (Spring Boot)

### Setup

1. Navigate to the backend directory
    sh
    cd P1
    

2. Update the src/main/resources/application.properties file with your MySQL database configuration.
    properties
    spring.datasource.url=jdbc:mysql://<YOUR_DATABASE_URL>:3306/<YOUR_DATABASE_NAME>
    spring.datasource.username=<YOUR_DATABASE_USERNAME>
    spring.datasource.password=<YOUR_DATABASE_PASSWORD>
    

3. Build the backend application
    sh
    ./mvnw clean install
    

4. Run the backend application
    sh
    ./mvnw spring-boot:run
    

## Frontend (React)

### Setup

1. Navigate to the frontend directory
    sh
    cd transaction-monitoring
    

2. Install the dependencies
    sh
    npm install
    

3. Run the frontend application
    sh
    npm start
    

## Machine Learning (Python)

### Setup

1. Ensure you have Python 3.8 installed.

2. Navigate to the directory containing the Python script
    sh
    cd transaction-monitoring/src
    

3. Install the required Python packages
    sh
    pip install -r requirements.txt
    

4. Run the Python script
    sh
    python transaction_client.py
    

## Available Scripts

In the project directory, you can run:

### npm start

Runs the frontend app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### npm test

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### npm run build

Builds the frontend app for production to the build folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

### npm run eject

**Note: this is a one-way operation. Once you eject, you can't go back!**

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Spring Boot Documentation

For detailed information on Spring Boot, visit the [Spring Boot documentation](https://spring.io/projects/spring-boot).

### Python Documentation

For detailed information on Python, visit the [Python documentation](https://docs.python.org/3/).