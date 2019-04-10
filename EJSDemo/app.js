var express = require("express");
var app = express();

app.use(express.static("public"));
app.set("view engine", "ejs"); //всюду убираем приставку .ejs 

app.get("/", function(req, res){
    res.render("home.ejs");
});

app.get("/fallinlovewith/:thing", function(req, res){
    var thing = req.params.thing;
    res.render("love.ejs", {thingVar:thing });
});

app.get("/posts", function(req, res) {
    var posts = [
        {title: "Post 1", author: "Tanya"},
        {title: "My fall in love", author: "Glib"},
        {title: "O God", author: "No Name"}
    ];
    
    res.render("posts.ejs", {posts: posts});
});






app.listen(process.env.PORT, process.env.IP, function(){
    console.log("I am hear!!!");
});