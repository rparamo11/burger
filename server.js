
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

var app = express();



app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

app.use(methodOverride("_method"));
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({
	defaultLayout: "main"
}));
app.set("view engine", "handlebars");

app.use(express.static('./public'));
 
require("./controllers/burger_controller.js")(app);

app.set('port', process.env.PORT);

app.listen(app.get('port'), () => {
    console.log(`Express app listening on ${app.get('port')}`);
});



// //Requires the npm packages of express and body parser
// var express = require("express");
// var bodyParser = require("body-parser");
// var methodOverride = require("method-override");

// var PORT = process.env.PORT || 3000;

// var app = express();

// // Serve static content for the app from the 'public' directory
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// app.use(methodOverride("_method"));
// var exphbs = require("express-handlebars");

// app.engine("handlebars", exphbs({
// 	defaultLayout: "main"
// }));
// app.set("view engine", "handlebars");

// app.use(express.static('./public'));
 
// require("./controllers/burger_controller.js")(app);

// app.set(PORT, process.env.PORT);

// app.listen(app.get(PORT), () => {
//     console.log(`Express app listening on ${app.get(PORT)}`);
// });




//Code doesnt work

//Requires the npm packages of express and body parser
// var express = require("express");
// var bodyParser = require("body-parser");
// var methodOverride = require("method-override");

// var port = process.env.PORT || 3000;

// var app = express();

// // Serve static content for the app from the 'public' directory
// app.use(express.static(process.cwd() + '/public'));

// app.use(bodyParser.urlencoded({ extended: false }));

// app.use(methodOverride("_method"));
// var exphbs = require("express-handlebars");

// // Set Handlebars 
// var exphbs = require('express-handlebars');

// app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
// app.set('view engine', 'handlebars');


// app.engine("handlebars", exphbs({
// defaultLayout: "main"
// }));
// app.set("view engine", "handlebars");

// app.use(express.static('./public'));

// require("./controllers/burger_controller.js")(app);

// app.set('port', process.env.PORT);

// app.listen(app.get('port'), () => {
// console.log(`Express app listening on ${app.get('port')}`);
// });