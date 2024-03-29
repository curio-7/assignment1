# Author - Sarthak Nigam
# SignUp/Login/Upload

## Overview

This web application allows users to sign up, log in, and upload images securely. The front-end is built with ReactJS, providing a dynamic user interface. The back-end uses Node.js with Express.js for server-side logic, MongoDB as the database for storing user data, Crypto.js for password hashing, and JWT (JSON Web Tokens) for authentication. Image uploads are handled by Multer.

## Prerequisites

- Node.js
- Express.js
- MongoDB
- React.js

## Features

- User Authentication (Sign Up / Log In)
- Secure password storage with crypto.js
- JWT-based session management
- Image upload functionality with Multer
- Responsive ReactJS frontend

## Endpoints

- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Log in a user
- `POST /api/image/upload` - Upload an image (authenticated route)

## Security

This application implements basic security features including:
- Password hashing with crypto
- JWT for secure authentication

## Technologies Used

- React.js
- Axios
- Node.js
- Express.js
- MongoDB
- Multer
- JSON Web Tokens (JWT)
- Crypto.js
- Postman
