const express = require("express");
const app = express();
const request = require("request")

app.set("view engine", "ejs");

app.get("/", function(req, res) {
    res.render("search")
});



app.get("/results", function(req, res){
    const query = req.query.search;
    let url = "http://www.omdbapi.com/?apikey=34459cc0&s=" + query;
    request( url, function(error, response, body){
        if(!error && response.statusCode == 200) {
            const data = JSON.parse(body)
            res.render("results", {data: data});
        };
    });
});




app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Baby, server is started!!! ");
});