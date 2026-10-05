# Task Management API

A simple backend Task Management API developed using **Node.js, Express.js, and MySQL**.

The project demonstrates a **layered monolithic architecture** where the application is separated into Controllers, Services, and DAO (Data Access Object) layers.

## Architecture

```text
Client / Postman
       ↓
   Controllers
       ↓
    Services
       ↓
      DAO
       ↓
     MySQL
```

### Controllers

The Controller layer handles HTTP requests and responses.

* Receives requests from the client
* Calls the appropriate service
* Returns HTTP responses
* Does not contain database queries

### Services

The Service layer contains the application/business logic.

* Validates task data
* Processes application rules
* Calls the DAO layer
* Does not directly communicate with MySQL

### DAO

The DAO layer handles database operations.

* Executes SQL queries
* Retrieves tasks
* Creates tasks
* Deletes tasks
* Communicates directly with MySQL

## Technologies Used

* Node.js
* Express.js
* MySQL
* mysql2
* dotenv
* Postman

## Project Structure

```text
task-management-api/
│
├── config/
│   └── db.js
│
├── controllers/
│   └── taskController.js
│
├── services/
│   └── taskService.js
│
├── dao/
│   └── taskDao.js
│
├── app.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

## Database Setup

Create a MySQL database:

```sql
CREATE DATABASE task_db;
USE task_db;
```

Create the `tasks` table:

```sql
CREATE TABLE tasks (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    completed BOOLEAN DEFAULT FALSE
);
```

Optional sample data:

```sql
INSERT INTO tasks (title, completed)
VALUES
('Learn Monolithic Architecture', FALSE),
('Build Task API', FALSE);
```

## Environment Variables

Create a `.env` file in the project root:

```text
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=YOUR_MYSQL_PASSWORD
DB_NAME=task_db
```

The `.env` file is **not included in the GitHub repository** because it contains database credentials.

## Installation

Clone the repository and open the project folder.

Install the required dependencies:

```bash
npm install
```

Make sure MySQL is running and the database has been created.

Then start the server:

```bash
node app.js
```

The API will run at:

```text
http://localhost:3000
```

## API Endpoints

| Method | Endpoint     | Description       |
| ------ | ------------ | ----------------- |
| GET    | `/`          | Get all tasks     |
| GET    | `/tasks`     | Get all tasks     |
| GET    | `/tasks/:id` | Get a task by ID  |
| POST   | `/tasks`     | Create a new task |
| DELETE | `/tasks/:id` | Delete a task     |

### Get All Tasks

```http
GET /tasks
```

Example response:

```json
[
    {
        "id": 1,
        "title": "Learn Monolithic Architecture",
        "completed": false
    }
]
```

### Get Task by ID

```http
GET /tasks/1
```

### Create a Task

```http
POST /tasks
```

Request body:

```json
{
    "title": "Complete the assignment"
}
```

### Delete a Task

```http
DELETE /tasks/1
```

## Purpose of the Project

This project was developed to demonstrate the principles of a **well-structured monolithic application**.

Although the application is deployed and run as a single unit, its responsibilities are separated into different layers. This makes the code easier to understand, maintain, test, and extend.

## Key Learning

The project demonstrates:

* Monolithic architecture
* Layered architecture
* Separation of responsibilities
* Controllers, Services, and DAO
* REST API development
* MySQL database integration
* Environment variable management
* Basic input validation
* Git and GitHub version control
