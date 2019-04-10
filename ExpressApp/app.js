var express = require("express");
var app = express();

app.get("/", function(req, res){
    res.send("Welcome to my assigment!");
    
})
  
 
app.get("/speak/:animal", function(req, res){
    switch (req.params.animal) {
      case 'pig':
          res.send("The pig says 'Oink!'");
          break;
           
        case 'cow':
          res.send("The caw says 'Moo!'");
          break;
           
        case 'dog':
            res.send("The dog says 'Woof Woof!'");
          break;
       
      default:
          res.send("Sorruy page not Found");
    }
});
   
app.get("/repeat/:word/:num", function(req, res){
    var total = " ";
    for (var i = 0; i < req.params.num; i++){
        total += req.params.word + " ";
    }
     res.send(total);
});



app.get("*", function(req, res){
    res.send("Sorry page not Found");
    
})



app.listen(process.env.PORT, function () {
  console.log('Example app listening on port 8080!');
});
