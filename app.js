var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());

var routes=require('./Routes/routes.js');
app.use('/',routes);

/*app.listen(3003,function(req,res){
	console.log('on port 3003');
});*/

const PORT = process.env.PORT || 3000;
app.listen(PORT, function(){ console.log(`Express listening on port ${PORT}`);
});