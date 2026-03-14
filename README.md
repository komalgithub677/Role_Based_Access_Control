# Full Stack Authentication & Role-Based Access Control (RBAC) System

## 📌 Project Overview

This project is a **Full Stack Authentication and Role-Based Access Control (RBAC) System** built using **Java Spring Boot (backend)** and **React + TypeScript (frontend)**.

The system allows users to register, login, and access content based on their assigned roles using **JWT-based authentication and role-based authorization**.

The application demonstrates secure authentication practices and structured full-stack architecture using modern development technologies.

---

# 🚀 Features

## Authentication

* User registration with:

  * Name
  * Email
  * Password
  * Role (USER / ADMIN)
* Secure login using email and password
* JWT token generation after successful login
* Token-based authentication for protected APIs

## Authorization (RBAC)

Two roles are implemented:

| Role  | Permissions                |
| ----- | -------------------------- |
| USER  | Access user-level content  |
| ADMIN | Access admin-level content |

### Access Rules

| Endpoint      | Access |
| ------------- | ------ |
| `/api/public` | Public |
| `/api/user`   | USER   |
| `/api/admin`  | ADMIN  |

---

# 🖥️ Frontend (React + TypeScript)

Frontend is built using **modern React ecosystem tools**.

### Technologies Used

* React
* TypeScript
* Vite
* React Router
* React Query
* Axios
* React Hook Form
* TailwindCSS

### Frontend Features

* Register Page
* Login Page
* Dashboard Page
* JWT storage using **localStorage**
* Protected routes
* Role-based UI rendering
* Conditional content display based on role

### Role-Based UI Sections

* User Content Card (visible only for USER)
* Admin Content Card (visible only for ADMIN)

---

# ⚙️ Backend (Spring Boot)

Backend is developed using **Spring Boot with Spring Security and JWT authentication**.

### Technologies Used

* Java 17
* Spring Boot
* Spring Security
* JWT Authentication
* Spring Data JPA
* Hibernate
* MapStruct
* Lombok
* Maven
* Swagger / OpenAPI

### Backend Features

* User & Role entities
* JWT authentication implementation
* Role-based endpoint authorization
* DTO-based request/response structure
* RESTful API design
* Swagger API documentation

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
│   ├── services
│   ├── hooks
│   └── routes
```

---

# 🔐 Authentication Flow

1. User registers with role (USER / ADMIN)
2. User logs in with email & password
3. Backend verifies credentials
4. Backend generates JWT token
5. Frontend stores token in **localStorage**
6. Token is attached to API requests
7. Backend validates token before accessing protected routes

---

# 🧪 API Endpoints

### Public Endpoint

```
GET /api/public
```

### User Endpoint

```
GET /api/user
```

### Admin Endpoint

```
GET /api/admin
```

---

# 📊 Swagger API Documentation

Swagger is integrated for API documentation.

After running the backend, access Swagger UI:

```
http://localhost:8080/swagger-ui.html
```

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

Backend will start on:

```
http://localhost:8080
```

---

# Frontend Setup

Navigate to frontend folder:

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

# 🎯 Optional Features (Bonus)

* Logout functionality
* Password validation rules
* Loading states
* Error handling
* Responsive UI design

---

# 📷 Screenshots

(Add screenshots of the application here)

Example:

* Register Page
* Login Page
* Dashboard
* Role-Based Content Display

---

# 📽️ Demo

(Optional)

You may add a short demo video showing:

* User registration
* Login
* Role-based dashboard content
* Protected routes

---

# 📚 Learning Outcomes

This project demonstrates:

* JWT-based authentication
* Role-Based Access Control (RBAC)
* Secure API development
* Full-stack architecture
* Modern React development practices
* Spring Security implementation

---

# 👩‍💻 Author

**Komal Narawade**

GitHub:
https://github.com/komalgithub677
