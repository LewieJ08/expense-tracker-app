# Expense Tracker App

This project is a **full-stack Expense Tracker application** built with the **MERN stack** (MongoDB, Express.js, React, Node.js) and **Vite** as the React development server.  

The app allows users to **sign up, log in, and track their expenses** across different categories with a **custom bearer token–based authentication system**. Users can add, update, delete, and filter expenses by date ranges such as the past week, last month, or custom periods.  

---

## 🚀 Tech Stack

- **Frontend**: React + Vite
- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose ODM

---

## Features

- **User Authentication**
  - Sign up and log in with **token-based authentication**
  - Server generates a random token on login and stores it in MongoDB
  - Token is sent to the client and used as a bearer token for future requests
  - Secure password storage with hashing

- **Expense Management**
  - Add new expenses with categories
  - Update or delete existing expenses
  - Categorize expenses (Groceries, Leisure, Electronics, Utilities, Clothing, Health, Others)

- **Expense Filtering**
  - View expenses from:
    - Past week
    - Last month
    - Last 3 months
    - Custom date range

- **Frontend**
  - Clean React-based UI with Vite
  - Responsive dashboard for managing expenses
  - Integration with backend API for authentication and expense data


> This project is in very early development (some features may be broken or incomplete)