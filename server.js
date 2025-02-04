

const express = require('express');
const dotenv = require('dotenv');
const router=require('./routes/routes')
dotenv.config();
const app = express();
const PORT = process.env.PORT || 8080;
console.log("the env vars:",process.env.PORT)



app.use("/api", router);
app.get('/', (req, res) => {
  res.send('Hello, Node.js with Express!');
});

app.get('/ok',(req, res) => {
    res.send("Welcome to Nodejs Basic!!!!")
})
app.get('/koeibenamedede',(req,res) => {
    console.log("e message console per show kar de")
    res.send("Koei Be message Show kar de")
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});