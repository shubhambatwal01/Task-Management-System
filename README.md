# Task Management System

A full-stack **Task Management System** built with the **MERN Stack**. The application includes **user authentication**, **user-specific task management**, and secure frontend-backend communication using **Axios** and **JWT authentication**.

## Features

- User Registration
- User Login
- JWT-based Authentication
- Secure Password Hashing
- User-Specific Tasks
- Create New Tasks
- View Logged-In User's Tasks
- Mark Tasks as Completed
- Delete Tasks
- Protected Backend Routes
- Axios API Integration
- Automatic JWT Authorization Header
- Responsive User Interface

## Tech Stack

### Frontend
- React.js
- JavaScript
- Vite
- Tailwind CSS
- Axios

### Backend
- Node.js
- Express.js
- JWT
- bcrypt

### Database
- MongoDB
- Mongoose

## How User-Specific Tasks Work

Each task is linked to the authenticated user through the user's MongoDB ObjectId.

```js
owner: {
  type: mongoose.Schema.Types.ObjectId,
  ref: "User",
  required: true,
}
```

When a user creates a task, the backend automatically assigns the logged-in user's ID:

```js
owner: req.user._id
```

Tasks are fetched only for the authenticated user:

```js
Task.find({ owner: req.user._id })
```

This prevents users from viewing, updating, completing, or deleting another user's tasks.

## Authentication Flow

1. User registers or logs in.
2. The backend verifies the user's credentials.
3. A JWT token is generated.
4. The frontend stores the token.
5. Axios sends the token with protected API requests.
6. Backend authentication middleware verifies the token.
7. Task operations are performed only for the authenticated user.

Authorization header:

```http
Authorization: Bearer <token>
```

## Axios Integration

The frontend communicates with the backend using Axios.

```js
import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:1101",
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;
```

## API Endpoints

### Authentication

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Login user |
| GET | `/api/auth/me` | Get authenticated user |

### Tasks

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/tasks` | Get logged-in user's tasks |
| POST | `/api/tasks` | Create a new task |
| PUT | `/api/tasks/:id/completed` | Update task completion status |
| DELETE | `/api/tasks/:id` | Delete a task |

All task routes are protected using JWT authentication.

## Project Structure

```text
Task-Management-System/
│
├── frontend/
│   ├── src/
│   ├── services/
│   │   ├── apiConfig.js
│   │   ├── authService.js
│   │   └── taskItemService.js
│   ├── package.json
│   └── .env
│
├── backend/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── app.js
│   ├── package.json
│   └── .env
│
└── README.md
```

> The exact folder structure may vary slightly depending on the project version.

## Getting Started

### 1. Clone the Repository

```bash
git clone <your-repository-url>
cd Task-Management-System
```

## Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file inside the `backend` folder:

```env
PORT=1101
MONGO_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
FRONTEND_URL=http://localhost:5173
```

Start the backend:

```bash
npm start
```

Backend URL:

```text
http://localhost:1101
```

## Frontend Setup

Open another terminal:

```bash
cd frontend
npm install
```

Create a `.env` file inside the `frontend` folder:

```env
VITE_API_URL=http://localhost:1101
```

Start the frontend:

```bash
npm run dev
```

Frontend URL:

```text
http://localhost:5173
```

## Environment Variables

### Backend

| Variable | Description |
|---|---|
| `PORT` | Backend server port |
| `MONGO_URL` | MongoDB connection string |
| `JWT_SECRET` | Secret key used to sign JWT tokens |
| `FRONTEND_URL` | Frontend URL used for CORS |

### Frontend

| Variable | Description |
|---|---|
| `VITE_API_URL` | Backend API base URL |

## Security

The application includes:

- Password hashing using bcrypt
- JWT-based authentication
- Protected task routes
- User ownership validation
- User-specific database queries
- Authorization headers through Axios

Sensitive values such as MongoDB URLs and JWT secrets should never be committed to GitHub.

Add these to `.gitignore`:

```gitignore
.env
node_modules/
dist/
```

## Example

If User A creates:

```text
Task 1
Task 2
Task 3
```

and User B creates:

```text
Task 4
Task 5
```

User A can only access Task 1, Task 2, and Task 3. User B can only access Task 4 and Task 5.

The backend enforces task ownership, so manually changing a task ID does not allow one user to access another user's task.

## Future Improvements

- Task due dates
- Task priorities
- Categories
- Search and filtering
- User profile management
- Password reset
- Email verification
- Drag-and-drop task organization
- Dashboard statistics

## Author

**Shubham Suresh Batwal**  
Full-Stack / MERN Stack Developer

## License

This project is intended for learning, portfolio, and development purposes.
