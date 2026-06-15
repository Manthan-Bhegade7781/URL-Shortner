# 🔗 URL Shortener

A secure and user-friendly URL Shortener web application built using Node.js, Express.js, MongoDB, EJS, and JavaScript. This application allows users to generate shortened URLs, manage their links, and securely access protected features through JWT-based authentication and authorization.

## Features

- User Registration and Login
- JWT Authentication
- Authorization for Protected Routes
- Create Short URLs
- Redirect Short URLs to Original URLs
- Unique URL Generation using shortid
- MongoDB Database Integration
- Server-Side Rendering with EJS
- Cookie-Based Authentication
- Secure Route Protection
- Responsive User Interface

## Tech Stack

### Frontend
- HTML
- CSS
- JavaScript
- EJS

### Backend
- Node.js
- Express.js

### Database
- MongoDB
- Mongoose

### Authentication & Security
- JSON Web Token (JWT)
- Authorization Middleware
- Cookie Parser

### NPM Packages
- express
- mongoose
- jsonwebtoken
- shortid
- cookie-parser
- dotenv
- ejs

---

##  Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/Manthan-Bhegade7781/your-repository-name.git
```

### 2. Navigate to the Project Folder

```bash
cd your-repository-name
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Create Environment Variables

Create a `.env` file in the root directory and add:

```env
PORT=8000
MONGO_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

### 5. Run the Application

```bash
npm start
```

or (if using nodemon)

```bash
npm run dev
```

### 6. Open in Browser

```text
http://localhost:8000
```

---

##  How It Works

1. Users create an account and log in.
2. JWT tokens are generated after successful authentication.
3. Authorized users can create shortened URLs.
4. A unique short URL is generated using the `shortid` package.
5. When a short URL is visited, the application redirects the user to the original URL.
6. Protected routes ensure only authenticated users can access specific features.

---

## Authentication & Authorization

This project implements:

- JWT-based Authentication
- Cookie-based Token Storage
- Protected Routes
- Authorization Middleware
- Secure User Access Control

Only authenticated users can create and manage URLs.

---

## Learning Outcomes

This project helped me learn:

- Node.js Fundamentals
- Express.js Routing and Middleware
- MongoDB and Mongoose Integration
- JWT Authentication
- Authorization Implementation
- Cookie Handling
- Server-Side Rendering using EJS
- MVC Architecture Concepts
- RESTful Application Development
- URL Shortening Logic
- Full-Stack Web Development Best Practices

---

## Screen Shots

<img width="955" height="410" alt="Screenshot 2026-06-15 145437" src="https://github.com/user-attachments/assets/f177864a-0f66-4f29-bbda-cea1bc9b0c5c" />

<img width="959" height="412" alt="Screenshot 2026-06-15 145510" src="https://github.com/user-attachments/assets/ed270504-0bf9-4c16-aae6-49a74ba89336" />

---

## Future Enhancements

- URL Analytics Dashboard
- Click Tracking
- QR Code Generation
- Custom Short URLs
- Password Reset Feature
- User Profile Management
- URL Expiration Support
- Admin Dashboard

---

## Author

**Manthan Bhegade**

GitHub: https://github.com/Manthan-Bhegade7781

LinkedIn: https://www.linkedin.com/in/manthanbhegade

---

## Support

If you found this project useful, consider giving it a star on GitHub. It helps motivate me to build and share more projects.

⭐ Star the repository if you like it!
