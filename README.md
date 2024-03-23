# Course Selling App

This is a web application built using Express.js for server-side development and MongoDB as the database. It provides functionalities for both admins and users to manage and purchase courses.

## Features

### Admin:
- Sign up and sign in functionalities.
- Post new courses.
- View and manage their courses.

### User:
- Sign up and sign in functionalities.
- Browse available courses.
- Purchase courses.

## Technologies Used

- Express.js: A web application framework for Node.js.
- MongoDB: A NoSQL database for storing application data.
- JSON Web Token (JWT): Used for authentication and authorization.
- Other dependencies can be found in `package.json`.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/adarshsingh9540/mongoDB-with-jwt-auth.git


Sure, here's a concise README.md template for your Express.js course selling app with MongoDB and JSON Web Token (JWT) authentication:

markdown
Copy code
# Course Selling App

This is a web application built using Express.js for server-side development and MongoDB as the database. It provides functionalities for both admins and users to manage and purchase courses.

## Features

### Admin:
- Sign up and sign in functionalities.
- Post new courses.
- View and manage their courses.

### User:
- Sign up and sign in functionalities.
- Browse available courses.
- Purchase courses.

## Technologies Used

- Express.js: A web application framework for Node.js.
- MongoDB: A NoSQL database for storing application data.
- JSON Web Token (JWT): Used for authentication and authorization.
- Other dependencies can be found in `package.json`.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/course-selling-app.git
Install dependencies:

bash
Copy code
cd course-selling-app
npm install
Set up environment variables:

# Create a .env file in the root directory.
Add the following environment variables:
makefile
Copy code
PORT=3000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
Start the server:

bash
Copy code
npm start
# API Endpoints
Admin Endpoints:
POST /admin/signup: Sign up as an admin.
POST /admin/signin: Sign in as an admin.
POST /admin/courses: Create a new course.
GET /admin/courses: Get all courses posted by the admin.

# User Endpoints:
POST /user/signup: Sign up as a user.
POST /user/signin: Sign in as a user.
GET /courses: Get all available courses.
POST /courses/:id/purchase: Purchase a course by its ID.
