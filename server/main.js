//setup webserver
var express = require('express');
var app = new express();

//render home page
app.get('/', function(req,res){
    res.render('./../app/index.ejs',{});
})
//location of resources to render home page
.use(express.static(__dirname + '/../temp'))
.listen(7777);
                   