
const UserData=require('../models/users')

const adduser= (async(req,res)=>{
    // console.log("the body is:",req.body)
    try {
        const newUser = new UserData(req.body);
        console.log("the data at the backend",newUser)
        await newUser.save();
        res.json(newUser);
    } catch (error) {
        res.status(500).json({ message: "Error adding user" });
    }
})




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
module.exports={usercont,specificuser,adduser};