

const {usercont,specificuser}=require('../controller/usercontroller')

const express = require("express");
const router = express.Router();

router.get('/users',usercont)
router.get('/specificuser/:id',specificuser)
module.exports=router;
