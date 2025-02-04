
const users=require('../models/users')
const usercont=((req,res)=>{
    res.json(users)
})
const specificuser=((req,res)=>{
    console.log("the id in params is:",req.params)
    const {id}=req.params
    const user = users.find(u => u.id === parseInt(id));
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
})
module.exports={usercont,specificuser};