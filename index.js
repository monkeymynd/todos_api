var express = require('express'),
    app = express(),
    port = 3000,
    bodyParser = require('body-parser');

var todoRoutes = require('./routes/todos.js');

// Allows to access the request body that comes in a put request or a get request
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/views'));

app.get('/', function(req, res){
    res.sendFile("index.html");
});

app.use('/api/todos', todoRoutes);

app.listen(port, function(){
    console.log("APP IS RUNNING ON PORT " + port);
});