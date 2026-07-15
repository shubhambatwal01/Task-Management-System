# ✅ Task Management System

## 📌 Overview

The **Task Management System** is a full-stack web application that helps users efficiently organize, track, and manage their daily tasks. It provides a simple and intuitive interface for creating, updating, completing, and deleting tasks while storing data securely in MongoDB.

The project demonstrates CRUD operations, RESTful API development, frontend-backend integration, and database management using the MERN stack.

---

## 🚀 Features

### 📝 Task Management

* Create New Tasks
* View All Tasks
* Update Existing Tasks
* Delete Tasks
* Mark Tasks as Completed
* Real-Time Task Updates

### 🎨 User Interface

* Clean and Responsive Design
* Mobile-Friendly Layout
* Interactive Task List
* Easy Navigation

### ⚙️ Backend Features

* REST API Architecture
* MongoDB Data Storage
* Express.js Server
* Error Handling Middleware
* CORS Configuration

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Vite
* TailwindCSS
* React Icons

### Backend

* Node.js
* Express.js
* CORS
* Body Parser

### Database

* MongoDB
* Mongoose

---

## 📂 Project Structure

```bash
Task-Management-System/
│
├── backend/
│   ├── controllers/
│   │   └── taskItemController.js
│   ├── models/
│   │   └── tasks.js
│   ├── routes/
│   │   └── taskItemRouter.js
│   ├── app.js
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── AddTodo.jsx
│   │   │   ├── TodoItem.jsx
│   │   │   ├── TodoItems.jsx
│   │   │   └── AppName.jsx
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── services/
│   │   └── taskItemService.js
│   └── package.json
└── README.md
```

---

## ⚡ Installation

### Clone Repository

```bash
git clone https://github.com/shubhambatwal01/Task-Management-System.git
cd Task-Management-System
```

### Backend Setup

```bash
cd backend
npm install
npm start
```

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

## 🔧 Environment Variables

Create a `.env` file inside the backend directory.

```env
PORT=1101

MONGO_URL=your_mongodb_connection_string

FRONTEND_URL=http://localhost:5173
```

---

## 🌐 API Endpoints

### Get All Tasks

```http
GET /api/tasks
```

### Create Task

```http
POST /api/tasks
```

### Update Task

```http
PUT /api/tasks/:id
```

### Delete Task

```http
DELETE /api/tasks/:id
```

---

## 📸 Screenshots

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/3462afb0-ce0f-4616-a715-8a34dbe0223f" />

```
```
## 🎯 Learning Outcomes

This project helped in understanding:

* React Component Architecture
* State Management
* REST API Development
* MongoDB Integration
* Express Routing
* CRUD Operations
* Frontend & Backend Communication
* Error Handling Techniques

---

## 🔮 Future Enhancements

* User Authentication
* Task Categories
* Due Dates & Reminders
* Task Priorities
* Search & Filter Tasks
* Drag-and-Drop Task Management
* Dashboard Analytics
* Dark Mode Support

```
```

## 👨‍💻 Developer

### Shubham Batwal

Full Stack Developer | React | Node.js | MongoDB

📧 Email: shubhambatwal14@gmail.com

🔗 LinkedIn: https://linkedin.com/in/shubhambatwal01/

🔗 GitHub: https://github.com/shubhambatwal01/

🌐 Portfolio: https://shubz-portfolio.vercel.app/

---

## ⭐ Support

If you like this project, consider giving it a ⭐ on GitHub.

It motivates me to build and share more open-source projects.
