var express = require('express')
var app = express()
var path = require('path');


var bodyparser = require('body-parser')
app.use(bodyparser.urlencoded({extended: false}))

app.post('/form', function(req, res){
	if (req.body.str) {
		res.end(req.body.str.split('').reverse().join(''));
		return;
	}
	res.render('index')
	

})

 app.listen(process.argv[2])