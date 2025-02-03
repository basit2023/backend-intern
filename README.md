## Start with Nodejs (Back-end)

## What is Node.js?
Node.js is an open-source, cross-platform runtime environment that allows developers to execute JavaScript code outside of a web browser. It is built on Chrome's V8 JavaScript engine and is commonly used for building backend services, APIs, and real-time applications.

### Key Features of Node.js:
1. **Asynchronous and Event-Driven:** Non-blocking I/O operations make it highly efficient.
2. **Single Programming Language:** JavaScript is used for both frontend and backend development.
3. **Fast Performance:** Powered by the V8 engine, Node.js executes JavaScript code quickly.
4. **Large Ecosystem:** The Node Package Manager (NPM) provides thousands of open-source libraries.
5. **Scalability:** Ideal for building scalable network applications and microservices.
6. **Active Community:** Large community support with frequent updates and improvements.

## What is Express.js?
Express.js is a minimal and flexible web application framework for Node.js. It simplifies building robust APIs and web applications by providing a lightweight layer with built-in functionalities like routing, middleware support, and request handling.

### Key Features of Express.js:
1. **Routing System:** Handles HTTP requests efficiently.
2. **Middleware Support:** Allows customization of request and response handling.
3. **Templating Engines:** Supports EJS, Pug, Handlebars, etc.
4. **Error Handling:** Provides structured error management.
5. **Integration:** Works seamlessly with databases, authentication systems, and third-party services.

## Getting Started with Node.js and Express.js

### 1. Install Node.js
Download and install Node.js from the official website:
- [Node.js Official Website](https://nodejs.org/)
- Verify installation:
  ```sh
  node -v
  npm -v
  ```

### 2. Initialize a Node.js Project
To create a new Node.js project, follow these steps:
```sh
mkdir my-node-app
cd my-node-app
npm init -y
```
This will create a `package.json` file with default settings.

### 3. Install Dependencies
Install required dependencies for a basic Node.js application:
```sh
npm install express dotenv
```
- `express`: A minimal and flexible Node.js web framework.
- `dotenv`: Loads environment variables from a `.env` file.

### 4. Setting Up the Environment
1. Create a `.env` file in the project root directory to store environment variables:
   ```sh
   touch .env
   ```
2. Add the following configuration inside the `.env` file:
   ```ini
   PORT=3000
   ```

### 5. Create a Basic Express.js Server
Create an `index.js` file and add the following code:
```javascript
const express = require('express');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello, Node.js with Express!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
```

### 6. Run the Application
Start the server with:
```sh
node index.js
```
Visit `http://localhost:3000/` in your browser to see the output.

### 7. Using Nodemon for Development
Install `nodemon` globally to automatically restart the server on file changes:
```sh
npm install -g nodemon
nodemon index.js
```

### 8. Recommended Folder Structure
```
my-node-app/
│── node_modules/
│── public/
│── routes/
│── views/
│── .env
│── index.js
│── package.json
│── README.md
```
- `public/`: Static files (CSS, JS, images)
- `routes/`: Application routes
- `views/`: HTML or template files
- `.env`: Environment variables
- `index.js`: Main entry point

## Conclusion
This guide provides a basic setup for a Node.js and Express.js project. You can further enhance it by integrating a database, authentication, and middleware for building robust applications. Happy coding! 🚀

## For more details follow below links:
- [Node.js Official Website](https://nodejs.org/)
- [Node.js Official Website](https://nodejs.org/api/all.html#all_documentation_about-this-documentation)
- [express.js Official Website](https://expressjs.com/en/starter/installing.html)
- [Freecodecamp Website](https://www.freecodecamp.org/news/what-is-node-js/)

