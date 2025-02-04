

Here’s a basic README file for an MVC-based Node.js project that reads data from constants instead of MongoDB. Also, I’ll explain what Thunder Client is and provide a beginner's guide.  

---

### 🚀 README for MVC Project 

```markdown
# MVC Project with Constants-Based Data

## 📌 Overview
This is a simple Node.js project following the **Model-View-Controller (MVC)** pattern. to get data from the constant insted of the mongodb

## 🏗 Project Structure
```
📂 project-root/
├── 📂 controllers/      # Contains controller files
│   ├── userController.js
├── 📂 models/           # Models (usually define schemas, but here we use constants)
│   ├── userModel.js
├── 📂 routes/           # Routes for different APIs
│   ├── userRoutes.js
├── 📂 views/            # (Optional) View templates for rendering
├── 📂 constants/        # Stores static data instead of using a database
│   ├── users.js
├── server.js           # Main server file
├── package.json        # Dependencies and scripts
└── README.md           # Project documentation
```



## 📂 Constants (Instead of Database)
Instead of MongoDB, we store user data in a `constants/users.js` file:

```javascript
// constants/users.js
const users = [
    { id: 1, name: "Alice", email: "alice@example.com" },
    { id: 2, name: "Bob", email: "bob@example.com" }
];

module.exports = users;
```

## 🚀 API Endpoints

### 1️⃣ Get All Users
- **Endpoint**: `GET /api/users`
- **Response**:
  ```json
  [
    { "id": 1, "name": "Alice", "email": "alice@example.com" },
    { "id": 2, "name": "Bob", "email": "bob@example.com" }
  ]
  ```

### 2️⃣ Get User by ID
- **Endpoint**: `GET /api/users/:id`
- **Example**: `GET /api/users/1`
- **Response**:
  ```json
  { "id": 1, "name": "Alice", "email": "alice@example.com" }
  ```

## 🎯 Controller (`controllers/userController.js`)
```javascript
const users = require("../constants/users");

exports.getAllUsers = (req, res) => {
    res.json(users);
};

exports.getUserById = (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
};
```

## 🛣 Routes (`routes/userRoutes.js`)
```javascript
const express = require("express");
const router = express.Router();
const { getAllUsers, getUserById } = require("../controllers/userController");

router.get("/users", getAllUsers);
router.get("/users/:id", getUserById);

module.exports = router;
```

## 🚀 Server (`server.js`)
```javascript
const express = require("express");
const app = express();

const userRoutes = require("./routes/userRoutes");
app.use("/api", userRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
```

## 🛠 Testing APIs with Thunder Client

### What is Thunder Client?
**Thunder Client** is a lightweight API testing tool similar to Postman but built inside VS Code. It allows you to test API endpoints easily.

### How to Use Thunder Client?
1. Install **Thunder Client** from the VS Code extensions marketplace.
2. Open **Thunder Client** from the VS Code sidebar.
3. Click **New Request**.
4. Select **GET** request.
5. Enter the API URL:  
   ```
   http://localhost:3000/api/users
   ```
6. Click **Send** to get a response.
7. Check the response data.

---


In **Node.js & Express.js**, `params`, `query`, and `body` are different ways to send data to the server. Here’s a breakdown:

---

## **1️⃣ Params (`req.params`)**  
🔹 Used for **route parameters** in the URL.  
🔹 Typically used for **identifying resources** (e.g., user ID, product ID).  
🔹 Data is **required** and part of the URL itself.

### **Example**:
```javascript
app.get("/user/:id", (req, res) => {
    const userId = req.params.id;
    res.send(`User ID: ${userId}`);
});
```
🔹 **Request URL**:  
```
GET http://localhost:3000/user/123
```
🔹 **Output**:  
```json
"User ID: 123"
```

---

## **2️⃣ Query (`req.query`)**  
🔹 Used for **optional parameters** in the URL.  
🔹 Sent **after the `?` symbol** in key-value format.  
🔹 Multiple query parameters are separated by `&`.  

### **Example**:
```javascript
app.get("/search", (req, res) => {
    const { name, age } = req.query;
    res.send(`Search results for: Name=${name}, Age=${age}`);
});
```
🔹 **Request URL**:  
```
GET http://localhost:3000/search?name=Alice&age=25
```
🔹 **Output**:
```json
"Search results for: Name=Alice, Age=25"
```

---

## **3️⃣ Body (`req.body`)**  
🔹 Used to send **large and structured data** in POST/PUT requests.  
🔹 Commonly used for **creating or updating data**.  
🔹 Data is sent in the request **body** (not visible in the URL).  
🔹 Requires **middleware (`express.json()`)** to parse JSON data.

### **Example**:
```javascript
app.use(express.json()); // Middleware to parse JSON

app.post("/user", (req, res) => {
    const { name, age } = req.body;
    res.send(`User Created: Name=${name}, Age=${age}`);
});
```
🔹 **Request (POST Body - JSON Format)**:
```json
{
    "name": "Bob",
    "age": 30
}
```
🔹 **Output**:
```json
"User Created: Name=Bob, Age=30"
```

---

## **🛠 Summary:**
| Type   | Used For | How Data is Sent | Example |
|--------|---------|------------------|---------|
| **Params** | Required values in URL | `/:id` (path) | `/user/123` |
| **Query** | Optional values in URL | `?key=value` | `/search?name=Alice&age=25` |
| **Body** | Sending structured data (JSON) | Inside request body | `{ "name": "Bob" }` |

---

### **When to Use Each?**
✔️ **Params (`req.params`)** → When fetching or modifying a **specific resource (ID-based requests)**.  
✔️ **Query (`req.query`)** → When filtering or searching for **optional parameters**.  
✔️ **Body (`req.body`)** → When sending **complex data (POST, PUT requests)**.


## 🔥 Conclusion
This project follows the **MVC pattern** but uses **constants instead of a database** for simplicity. You can extend it by replacing constants with MongoDB or another database later.

Happy Coding! 🚀🎯
