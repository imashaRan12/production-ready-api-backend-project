# Subscription Management System API (Backend-Project)

A production-ready Subscription Management System built with Node.js and Express, designed to handle real users, real payments, and real-world business logic.

## 📋 <a name="table">Table of Contents</a>

1. 🤖 [Introduction](#-introduction)
2. ⚙️ [TechStack](#-techstack)
3. 🔋 [Features](#-features)
4. 🤸 [Quick Start](#-quick_start)
5. 🚀 [Testing](#-testing)

## 🤖 Introduction

Build a **production-ready Subscription Management System API** that handles **real users, real money, and real business logic**.

Authenticate users using JWTs, connect a database, create models and schemas, and integrate it with ORMs. Structure the architecture of your API to ensure scalability and seamless communication with the frontend.

If you're getting started and need assistance or face any bugs, join our active Discord community with over **50k+** members. It's a place where people help each other out.

## ⚙️ TechStack

- Node.js
- Express.js
- MongoDB

## 🔋 Features

👉 **Advanced Rate Limiting and Bot Protection**: with Arcjet that helps you secure the whole app.

👉 **Database Modeling**: Models and relationships using MongoDB & Mongoose.

👉 **JWT Authentication**: User CRUD operations and subscription management.

👉 **Global Error Handling**: Input validation and middleware integration.

👉 **Logging Mechanisms**: For better debugging and monitoring.

👉 **Email Reminders**: Automating smart email reminders with workflows using Upstash.

and many more, including code architecture and reusability

## 🤸 Quick_Start

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/imashaRan12/production-ready-api-backend-project.git
cd production-ready-api-backend-project
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Set Up Environment Variables**

Create a new file named `.env.local` in the root of your project and add the following content:

```env
# PORT
PORT=5500
SERVER_URL="http://localhost:5500"

# ENVIRONMENT
NODE_ENV=development

# DATABASE
DB_URI=

# JWT AUTH
JWT_SECRET=
JWT_EXPIRES_IN="1d"

# ARCJET
ARCJET_KEY=
ARCJET_ENV="development"

# UPSTASH
QSTASH_URL=http://127.0.0.1:8080
QSTASH_TOKEN=

# NODEMAILER
EMAIL_PASSWORD=
```

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:5500](http://localhost:5500) in your browser or any HTTP client to test the project.

## 🚀 Testing

All the testing are done by using [HTTPie](https://httpie.io/) api testing app and capture these:

1. Sign Up

   <img src="screenshots/auth/1.png">

   Created in MongoDB cluster

   <img src="screenshots/auth/2.png">

2. Sign In

   <img src="screenshots/auth/3.png">

3. Unauthorized Access (Try accessing protected route without token)

   <img src="screenshots/security/4.png">

4. Get Single User (User can see only their details)

   <img src="screenshots/user/5.png">

5. Update User Details

   <img src="screenshots/user/6.png">

   Update in Mongodb user document

   <img src="screenshots/user/7.png">

6. Delete User

   <img src="screenshots/user/8.png">

7. Create Subscription

   <img src="screenshots/subscription/10.png">

8. Send Email Reminder for Renewal Subscription

   Console Message:

   <img src="screenshots/subscription/9.png">

   Receive the Email to User:

   <img src="screenshots/subscription/11.png">
   <img src="screenshots/subscription/12.png">

9. Get User Subscriptions

   <img src="screenshots/subscription/13.png">

10. Rate limiting enabled

    <img src="screenshots/security/14.png">
