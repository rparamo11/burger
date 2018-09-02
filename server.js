//npm install
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require('method-override');

//creates express server
var app = express();

app.use(express.static(process.cwd() + '/public'));

app.use(bodyParser.urlencoded({
	extended: false

}));

app.use(methodOverride('_method'));

//handlebars
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
	defaultLayout: 'main'

}));
app.set('view engine', 'handlebars');


//Import routes and give the server across to them
var routes = require('./controllers/burgers_controller.js');
app.use('/', routes);

var port = process.env.PORT || 3000;

app.listen(port);