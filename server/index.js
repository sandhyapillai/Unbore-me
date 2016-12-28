/**
 * Node Express Server code for Unbore-Me Application
 */

var express = require('express'),
path = require('path'),
port = 3000;

var app = express();

// Setup the path for static files in the application
app.use(express.static(path.join(__dirname,'..','src')));

//API to load the index page
app.get('/',function(req,res){
	res.render('index.html');
})

//Listening on port
app.listen(port);
console.log('Listening on port ',port);
