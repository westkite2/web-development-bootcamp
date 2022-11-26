const { response } = require("express");
const express = require("express");

const app = express();

//what should happen when browser makes a get request
app.get("/", function(req, res){  //location of get request = /
    res.send("<h1>hi</h1>");
});

app.get("/about", function(req, res){
    res.send("I am Seoyeon! Nice to meet you.");
});

app.get("/contact", function(req, res){
    res.send("westkite2@gmail.com");
});

//listen on the port for any http request sent to server
app.listen(3000, function(){
    console.log("Server started on port 3000");
});

