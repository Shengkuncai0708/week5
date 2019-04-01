var user=require('../Models/user.js');

var findAllUsers=function(req,res){
	res.send(user.User);
};

var findOneUser=function(req,res){
	res.send(user.User[req.params.id]);
};

module.exports.findAllUsers=findAllUsers;
module.exports.findOneUser=findOneUser;