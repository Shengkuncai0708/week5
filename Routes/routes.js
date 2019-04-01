var express = require('express');
var router=express.Router();

var controller=require('../Controllers/controller.js');

router.get('/User',controller.findAllUsers);
router.get('/User/:id',controller.findOneUser);

module.exports=router;