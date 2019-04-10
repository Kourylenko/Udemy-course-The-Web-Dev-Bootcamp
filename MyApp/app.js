var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("home");    
});

app.post("/addfriend", function(req, res){
    res.send("Add new friend, congratulation !!! ");
});

app.get("/friends", function(req, res){
    var friends = ["1", "2", "3", "4"];
    
    res.render("friends", {myFriends: friends});    
});




app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Baby, server is started!!! ");
});