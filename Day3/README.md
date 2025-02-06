# Node.js: Store Data in MongoDB Instead of Constants

## 📌 Introduction
This guide will help you replace **constant-based data storage** with **MongoDB** in a Node.js application. We'll also cover **synchronous vs asynchronous operations** and how to use `async/await` in MongoDB queries.

---

## 🔹 Step 1: Install MongoDB and Dependencies
Ensure you have **MongoDB installed** and install the required Node.js dependencies:
```sh
npm init -y         # Initialize a Node.js project
npm install express mongoose dotenv
```

- **Express** → Framework for handling API requests.
- **Mongoose** → ODM (Object Data Modeling) library for MongoDB.
- **Dotenv** → Loads environment variables from a `.env` file.

---

## 🔹 Step 2: Connect to MongoDB Atlas
### 1. **Create a MongoDB Atlas Account**
- Go to [MongoDB Atlas](https://www.mongodb.com/atlas) and sign up.
- Create a **new project** and **new cluster**.
- In the **Database Deployments** section, click **Connect** → **Connect Your Application**.
- Copy the connection string, which will look like:
  ```
  mongodb+srv://<username>:<password>@cluster0.mongodb.net/mydatabase?retryWrites=true&w=majority
  ```

### 2. **Store MongoDB URI in `.env` File**
Create a **`.env`** file and paste your MongoDB Atlas URI:
```env
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/mydatabase?retryWrites=true&w=majority
```

### 3. **Connect to MongoDB Atlas in `db.js`**
Create a **`db.js`** file to handle MongoDB connection:
```javascript
const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB Atlas Connected");
    } catch (error) {
        console.error("MongoDB Connection Failed ", error);
        process.exit(1);
    }
};

module.exports = connectDB;
```

---

## 🔹 Step 3: Create a Mongoose Model
Create a **`models/User.js`** file to define a User schema:
```javascript
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
});

module.exports = mongoose.model("User", UserSchema);
```

---

## 🔹 Step 4: Replace Constant Data with MongoDB
Before (Using Constant Data):
```javascript
const users = [
    { id: 1, name: "Alice", email: "alice@example.com" },
    { id: 2, name: "Bob", email: "bob@example.com" }
];
console.log(users);
```

After (Using MongoDB):
```javascript
const express = require("express");
const connectDB = require("./db");
const User = require("./models/User");

const app = express();
app.use(express.json()); // Middleware to parse JSON

// Connect to MongoDB Atlas
connectDB();

// API to Get Users from MongoDB
app.get("/users", async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: "Error fetching users" });
    }
});

// API to Add a New User to MongoDB
app.post("/users", async (req, res) => {
    try {
        const newUser = new User(req.body);
        await newUser.save();
        res.json(newUser);
    } catch (error) {
        res.status(500).json({ message: "Error adding user" });
    }
});

// Start Server
app.listen(3000, () => console.log("Server running on port 3000"));
```

---

## 🔹 Step 5: Understanding Sync vs Async/Await

### **🔹 Synchronous Code (Blocking Execution)**
In **synchronous** programming, code executes **line by line**.
```javascript
console.log("Step 1");
console.log("Step 2"); // Executes only after Step 1 finishes
console.log("Step 3");
```
**Output:**
```
Step 1
Step 2
Step 3
```

### **🔹 Asynchronous Code (Non-Blocking Execution)**
In **asynchronous** programming, code doesn't wait for operations to complete.
```javascript
console.log("Start");
setTimeout(() => console.log("After 2 seconds"), 2000);
console.log("End");
```
**Output:**
```
Start
End
(Waits 2 seconds)
After 2 seconds
```

### **🔹 Using Async/Await with MongoDB**
`async/await` makes asynchronous code look like synchronous code.
```javascript
const fetchUsers = async () => {
    console.log("Fetching users...");
    const users = await User.find();
    console.log(users);
};
fetchUsers();
```

---

## 🚀 Summary
✅ Replace constants with MongoDB using **Mongoose**.
✅ Connect to **MongoDB Atlas** for cloud database storage.
✅ Use `async/await` to handle asynchronous operations cleanly.
✅ Always use `try/catch` to handle errors in async code.

Now your app stores data **persistently** instead of using constants! 🎉

---

### **Need Help?**
- **MongoDB Docs:** [https://www.mongodb.com/docs/](https://www.mongodb.com/docs/)
- **Mongoose Docs:** [https://mongoosejs.com/docs/](https://mongoosejs.com/docs/)
- **Express Docs:** [https://expressjs.com/](https://expressjs.com/)

Happy Coding! 🚀

