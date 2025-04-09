
Project Overview:
This Task Management API allows users to:

*Register and login securely
*Create, read, update, and delete tasks
*Track task status (pending, in-progress, completed)
*The API follows RESTful design principles and includes JWT-based authentication to ensure that users can only access their own tasks.

Features---
*User Authentication
*Registration with secure password hashing
*Login with JWT token generation
*Protected routes requiring authentication
*Task Management
*Create new tasks with title, description, and status
*Retrieve all tasks for the authenticated user
*Get specific task details by ID
*Update task information
*Delete tasks
......INTALLATION.......
======>cd task-management-api
....
Install dependencies:
---->npm install

# Create a .env file in the project root:


    JWT_SECRET=your_jwt_secret_key_here
    MONGODB_URI=mongodb://localhost:27017/task-manager
    PORT=3000
    Start the server:
    bash
    ====>npm start


# Development mode with auto-restart
npm run dev

# POSTMAN CHECK API
npm start
===>The API will be available at http://localhost:3000
API Documentation
Base URL
Local: htt
Deployed:
Authentication Endpoints
Register a new user
URL: /auth/register
Method: POST
Request Body:
json


{
  "username": "johndoe",
  "password": "securepassword123"
}
Success Response:
Status: 201 Created
Body:
json


{
  "message": "User registered successfully"
}
Login
URL: /auth/login
Method: POST
Request Body:
json


{
  "username": "johndoe",
  "password": "securepassword123"
}
Success Response:
Status: 200 OK
Body:
json


{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDc4OWZkMzUzZGYxMjM0NTY3ODkwYWIiLCJpYXQiOjE2ODU2MjE3MTUsImV4cCI6MTY4NTYyNTMxNX0.example-token"
}
Task Endpoints
All task endpoints require authentication. Include the JWT token in the request header:



Authorization: Bearer your-jwt-token
Create a Task
URL: /tasks
Method: POST
Headers: Authorization: Bearer your-jwt-token
Request Body:
json


{
  "title": "Complete project documentation",
  "description": "Write README.md and API documentation",
  "status": "pending"
}
Success Response:
Status: 201 Created
Body:
json


{
  "_id": "64789fd353df1234567890ab",
  "title": "Complete project documentation",
  "description": "Write README.md and API documentation",
  "status": "pending",
  "user": "64789fd353df1234567890cd",
  "createdAt": "2023-06-01T12:34:56.789Z",
  "updatedAt": "2023-06-01T12:34:56.789Z"
}
Get All Tasks
URL: /tasks
Method: GET
Headers: Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDc4OWZkMzUzZGYxMjM0NTY3ODkwYWIiLCJpYXQiOjE2ODU2MjE3MTUsImV4cCI6MTY4NTYyNTMxNX0.example-token
Success Response:
Status: 200 OK
Body:
json


[
  {
    "_id": "64789fd353df1234567890ab",
    "title": "Complete project documentation",
    "description": "Write README.md and API documentation",
    "status": "pending",
    "user": "64789fd353df1234567890cd",
    "createdAt": "2023-06-01T12:34:56.789Z",
    "updatedAt": "2023-06-01T12:34:56.789Z"
  },
  {
    "_id": "64789fd353df1234567890ef",
    "title": "Implement user authentication",
    "description": "Add JWT-based authentication to the API",
    "status": "completed",
    "user": "64789fd353df1234567890cd",
    "createdAt": "2023-06-01T10:20:30.456Z",
    "updatedAt": "2023-06-01T11:22:33.789Z"
  }
]
Get a Specific Task
URL: /tasks/:id
Method: GET
Headers: Authorization: Bearer your-jwt-token
Success Response:
Status: 200 OK
Body:
json


{
  "_id": "64789fd353df1234567890ab",
  "title": "Complete project documentation",
  "description": "Write README.md and API documentation",
  "status": "pending",
  "user": "64789fd353df1234567890cd",
  "createdAt": "2023-06-01T12:34:56.789Z",
  "updatedAt": "2023-06-01T12:34:56.789Z"
}
Update a Task
URL: /tasks/:id
Method: PUT
Headers: Authorization: Bearer your-jwt-token
Request Body:
json


{
  "title": "Complete project documentation",
  "description": "Write README.md and API documentation with examples",
  "status": "in-progress"
}
Success Response:
Status: 200 OK
Body:
json


{
  "_id": "64789fd353df1234567890ab",
  "title": "Complete project documentation",
  "description": "Write README.md and API documentation with examples",
  "status": "in-progress",
  "user": "64789fd353df1234567890cd",
  "createdAt": "2023-06-01T12:34:56.789Z",
  "updatedAt": "2023-06-01T13:45:12.345Z"
}
Delete a Task
URL: /tasks/:id
Method: DELETE
Headers: Authorization: Bearer your-jwt-token
Success Response:
Status: 200 OK
Body:
json


{
  "message": "Task deleted successfully"
}


