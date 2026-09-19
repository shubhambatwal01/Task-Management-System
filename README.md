# ✅ Task Management System – MERN Stack Application

## 📌 Overview

**Task Management System** is a full-stack web application designed to help users create, manage, update, and track their daily tasks efficiently.

The application provides a simple and responsive interface where users can organize tasks, monitor completion status, and manage their personal task list.

Built using the **MERN Stack (MongoDB, Express.js, React.js, Node.js)**, the project demonstrates full-stack development, REST API integration, authentication, database management, and responsive frontend design.

---

## ✨ Features

### 👤 User Features

- User Registration
- Secure User Login
- JWT-Based Authentication
- User-Specific Task Management
- Protected Routes
- Secure Logout

### ✅ Task Management

- Create New Tasks
- View All Tasks
- Update Existing Tasks
- Delete Tasks
- Mark Tasks as Completed
- Mark Tasks as Pending
- Track Task Status
- Manage Personal Tasks

### 📊 Dashboard

- View Total Tasks
- View Completed Tasks
- View Pending Tasks
- Quick Task Overview
- Simple and Responsive Dashboard

### 🎨 User Interface

- Responsive React Interface
- Clean and Modern Layout
- Mobile-Friendly Design
- Easy Task Navigation
- User-Friendly Task Forms

---

## 🛠️ Tech Stack

### Frontend

- React.js
- JavaScript
- Vite
- Axios
- React Router DOM
- Tailwind CSS

### Backend

- Node.js
- Express.js
- JWT Authentication
- bcrypt.js

### Database

- MongoDB
- Mongoose

### Development Tools

- Git
- GitHub
- Visual Studio Code
- Postman
- npm

---

## 📂 Project Structure

```bash id="px4fu9"
Task-Management-System/
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── package.json
│   └── vite.config.js
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

## 🚀 Installation

### Clone Repository

```bash id="h7j2ou"
git clone https://github.com/shubhambatwal01/Task-Management-System.git
cd Task-Management-System
```

---

## ⚙️ Backend Setup

Navigate to the backend folder:

```bash id="04nnxw"
cd backend
```

Install dependencies:

```bash id="85o34g"
npm install
```

Start the backend server:

```bash id="a26y8v"
npm start
```

If your project uses Nodemon:

```bash id="wwxsxm"
npm run dev
```

---

## 💻 Frontend Setup

Open another terminal and navigate to the frontend folder:

```bash id="osxezp"
cd frontend
```

Install dependencies:

```bash id="qyq7wr"
npm install
```

Start the React development server:

```bash id="3agjul"
npm run dev
```

The application will usually run at:

```text id="g4nwoq"
http://localhost:5173
```

---

## ⚙️ Environment Variables

Create a `.env` file inside the backend folder.

```env
PORT=1101

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

CLIENT_URL=http://localhost:5173
```

Generate a secure JWT secret using:

```bash id="msazeg"
node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
```

Copy the generated value into:

```env
JWT_SECRET=your_generated_secret
```

---

## 🔌 REST API

The backend provides REST APIs for authentication and task management.

### Authentication Routes

```text id="pd8t31"
POST /api/auth/register
POST /api/auth/login
```

### Task Routes

```text id="tj99om"
GET    /api/tasks
POST   /api/tasks
PUT    /api/tasks/:id
DELETE /api/tasks/:id
```

> API routes may differ depending on the current implementation of the project.

---

## 🗄️ Database

The application uses **MongoDB** for storing user and task information.

### User Data

User documents may contain:

```text id="qutk3t"
name
email
password
```

### Task Data

Task documents may contain:

```text id="rf5kv7"
title
description
status
userId
createdAt
updatedAt
```

Each task can be associated with the currently authenticated user, allowing users to manage only their own tasks.

---

## 🔒 Authentication & Security

- JWT-Based Authentication
- Password Hashing using bcrypt
- Protected Backend Routes
- User-Specific Task Access
- Secure Authentication Middleware
- Environment Variable Protection
- MongoDB User Association
- Unauthorized Request Protection

---

## 📸 Screenshots

### Login Page

```html id="0qb8bj"
<img
  width="1920"
  height="1080"
  alt="image"
  src="https://github.com/user-attachments/assets/ea9a50ec-1cfa-491b-beaf-6f31248dbb97"
/>
```

### Dashboard

```html id="ldgitb"
<img
  width="1920"
  height="1080"
  alt="image"
  src="https://github.com/user-attachments/assets/4b01a0a0-5b56-4d7c-8242-81de164eda00"
/>
```

## 🔄 Task Workflow

The application follows a simple task management workflow:

```text id="aijmtr"
Register / Login
      ↓
Dashboard
      ↓
Create Task
      ↓
View Tasks
      ↓
Update Task
      ↓
Mark Completed / Pending
      ↓
Delete Task
```

---

## 📈 Future Enhancements

- Task Priority Levels
- Task Categories
- Due Dates
- Search & Filter Tasks
- Task Sorting
- Email Reminders
- Notifications
- Dark / Light Theme
- Drag-and-Drop Task Management
- Calendar Integration
- Analytics Dashboard
- Profile Management
- Password Reset
- Google Authentication

---

## 🎯 Learning Outcomes

Through this project, I gained practical experience in:

- Full Stack MERN Development
- React.js Development
- Node.js & Express.js
- MongoDB Database Design
- Mongoose Models
- REST API Development
- CRUD Operations
- JWT Authentication
- Password Hashing
- Protected Routes
- User-Specific Data Management
- Axios API Integration
- React State Management
- Frontend & Backend Integration
- Environment Variable Management
- Error Handling
- Git & GitHub Workflow

---

## 📂 Repository

🔗 **GitHub Repository:**
https://github.com/shubhambatwal01/Task-Management-System

---

## 👨‍💻 Developer

### Shubham Batwal

Full Stack Developer | React.js | Node.js | MongoDB

📧 Email: [shubhambatwal14@gmail.com](mailto:shubhambatwal14@gmail.com)

🔗 LinkedIn: https://linkedin.com/in/shubhambatwal01/

🔗 GitHub: https://github.com/shubhambatwal01/

🌐 Portfolio: https://shubz-portfolio.vercel.app/

---

## ⭐ Support

If you found this project useful, consider giving it a ⭐ on GitHub.

Your support helps me continue learning, building, and sharing more full-stack projects.
