# Full Stack Authentication & Role-Based Access Control (RBAC) System

## 📌 Project Overview

This project is a **Full Stack Authentication and Role-Based Access Control (RBAC) System** built using **Java Spring Boot (Backend)** and **React + TypeScript (Frontend)**.

The application allows users to **register, login, and access content based on their assigned roles** using **JWT-based authentication** and **role-based authorization**.

This project demonstrates secure authentication practices and a structured full-stack architecture using modern technologies.

---

# 🚀 Features

## Authentication

Users can securely register and log in using email and password.

Registration includes:

- Name
- Email
- Password
- Role (USER / ADMIN)

Authentication features:

- Password encryption using **BCrypt**
- **JWT Token generation** after successful login
- Token-based authentication for protected APIs
- Secure backend validation using **Spring Security**

---

## Authorization (RBAC)

The system implements **Role-Based Access Control** with two roles.

| Role | Permissions |
|-----|-------------|
| USER | Access user-level content |
| ADMIN | Access admin-level content |

### Access Rules

| Endpoint | Access |
|--------|--------|
| `/api/public` | Public |
| `/api/users/user/dashboard` | USER |
| `/api/users/admin/dashboard` | ADMIN |

Frontend components are rendered **dynamically based on the logged-in user's role**.

---

# 🖥️ Frontend (React + TypeScript)

The frontend is built using modern React tools.

### Technologies Used

- React
- TypeScript
- Vite
- React Router
- Axios
- React Hook Form
- TailwindCSS

### Frontend Features

- Home / Welcome Page
- Register Page
- Login Page
- Role-Based Dashboard
- JWT storage using **localStorage**
- Protected routes
- Conditional rendering based on user role

### Role-Based UI Components

- **User Content Card** → visible only for USER
- **Admin Content Card** → visible only for ADMIN

---

# ⚙️ Backend (Spring Boot)

The backend is built using **Spring Boot with Spring Security and JWT authentication**.

### Technologies Used

- Java 17
- Spring Boot
- Spring Security
- JWT Authentication
- Spring Data JPA
- Hibernate
- MapStruct
- Lombok
- Maven
- Swagger / OpenAPI
- MySQL

### Backend Features

- User & Role entities
- Secure JWT authentication
- Role-based endpoint authorization
- DTO-based request/response structure
- RESTful API architecture
- Swagger API documentation
- BCrypt password encryption

---

# 📂 Project Structure

```
Role_Based_Access_Control
│
├── backend
│   ├── controller
│   ├── service
│   ├── repository
│   ├── entity
│   ├── dto
│   ├── security
│   └── config
│
├── frontend
│   ├── components
│   ├── pages
│   ├── routes
│   ├── api
│   └── assets
│
└── screenshots
```

---

# 🔐 Authentication Flow

1. User registers with role **USER or ADMIN**
2. User logs in using email & password
3. Backend verifies credentials
4. Backend generates **JWT Token**
5. Frontend stores token in **localStorage**
6. Token is attached to protected API requests
7. Backend validates token using JWT filter
8. Access is granted based on **user role**

---

# 🧪 API Endpoints

### Public Endpoint

```
GET /api/public
```

### User Endpoint

```
GET /api/users/user/dashboard
```

### Admin Endpoint

```
GET /api/users/admin/dashboard
```

### Authentication Endpoints

```
POST /api/users/register
POST /api/users/login
```

---

# 📊 Swagger API Documentation

Swagger UI is integrated for API testing.

After running the backend, open:

```
http://localhost:8080/swagger-ui/index.html
```

Swagger allows testing APIs such as:

- Register User
- Login
- Get Profile
- Admin Delete User
- Role-based endpoints

---

# 🛠️ Setup Instructions

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/komalgithub677/Role_Based_Access_Control.git
cd Role_Based_Access_Control
```

---

# Backend Setup

### Install Dependencies

```bash
mvn clean install
```

### Run Backend

```bash
mvn spring-boot:run
```

Backend runs on:

```
http://localhost:8080
```

---

# Frontend Setup

Navigate to the frontend folder:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Run the frontend:

```bash
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---

# 🗄️ Database Setup

The project uses **MySQL Database**.

Example configuration in `application.properties`:

```
spring.datasource.url=jdbc:mysql://localhost:3306/rbac_db
spring.datasource.username=root
spring.datasource.password=yourpassword

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
```

---

# 📷 Application Screenshots

## Home Page

![Home Page](screenshots/home.png)

The welcome page that allows users to navigate to login or registration.

---

## Register Page

![Register Page](screenshots/register.png)

Users can create an account by providing:

- Name
- Email
- Password
- Role (USER / ADMIN)

---

## Login Page

![Login Page](screenshots/login.png)

Registered users log in using their email and password.  
After successful login, a **JWT token** is generated.

---

## Admin Dashboard

![Admin Dashboard](screenshots/admin-dashboard.png)

Admin users can access administrative controls such as:

- Viewing registered users
- Deleting users
- System monitoring

---

## User Dashboard

![User Dashboard](screenshots/user-dashboard.png)

User dashboard allows access to personal profile and user-level content.

---

## Swagger API Documentation

![Swagger UI](screenshots/swagger.png)

Swagger provides interactive API testing for backend endpoints.

---

## Database (MySQL Workbench)

![Database](screenshots/database.png)

User data stored securely in MySQL database.

---

## Backend Running (Spring Boot)

![Backend Running](screenshots/backend-running.png)

Spring Boot backend running successfully with Hibernate and MySQL connection.

---

# 🎯 Optional Features Implemented

- Logout functionality
- Password validation
- Responsive UI using TailwindCSS
- Role-based UI rendering
- Swagger API documentation

---

# 📚 Learning Outcomes

This project demonstrates:

- JWT-based authentication
- Role-Based Access Control (RBAC)
- Secure API development
- Spring Security integration
- Full-stack architecture
- React + TypeScript development
- REST API design

---

# 👩‍💻 Author

**Komal Narawade**

GitHub  
https://github.com/komalgithub677
