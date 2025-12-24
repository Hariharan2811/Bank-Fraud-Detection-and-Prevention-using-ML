🏦 Bank Transaction Fraud Detection and Prevention System Using Machine Learning Techniques
📌 Project Overview

This project focuses on detecting and preventing fraudulent bank transactions using Machine Learning techniques integrated with a modern web architecture.
Each transaction is analyzed in real time, and a Risk Score is generated to classify the transaction as legitimate, suspicious, or fraudulent.

The system is built using:

⦁	MERN Stack for frontend and backend services
⦁	FastAPI for serving the Machine Learning model

🎯 Objectives

⦁	Detect fraudulent transactions accurately

⦁	Prevent unauthorized financial activities

⦁	Reduce manual fraud investigation efforts

⦁	Improve customer trust and transaction security

🧠 Risk Score Classification

Each transaction is assigned a Risk Score (0–100) by the ML model:

| Risk Score Range | Transaction Status | System Action             |
| ---------------- | ------------------ | ------------------------- |
| **0 – 49**       | Legitimate         | Transaction Approved      |
| **50 – 79**      | Suspicious         | OTP Verification Required |
| **80 – 100**     | Fraudulent         | Transaction Blocked       |


🛠️ Technology Stack

Frontend

🔹 React.js

🔹 HTML5, CSS3, JavaScript

Backend

🔹 Node.js

🔹 Express.js

Machine Learning API

🔹 FastAPI

🔹 Python

Database

🔹 MongoDB
