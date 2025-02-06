

const {usercont,specificuser,adduser}=require('../controller/usercontroller')

const express = require("express");
const router = express.Router();

router.post('/addusers',adduser)
router.get('/users',usercont)
router.get('/specificuser/:id',specificuser)
module.exports=router;
