const bodyParser = require("body-parser"),
        mongoose = require("mongoose"),
         express = require("express"),
             app = express();

// APP CONFIG
mongoose.connect('mongodb://localhost:27017/restful_blog_app', { useNewUrlParser: true });
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

// MONGOOSE/MODEL CONFIG
var blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    created: {type: Date, default: Date.now}
});
// BLOG CONTAINER
var Blog = mongoose.model("Blog", blogSchema);

// Blog.create({
//     title: "Test Blog",
//     image: "https://cdn.pixabay.com/photo/2017/05/19/10/12/hand-2326058__340.jpg",
//     body: "HELLO THIS IS A BLOD POST !",
// });

// RESTFUL ROUTES
app.get("/", function(req, res){
    res.redirect("/blogs");
});

// INDEX ROUTE
app.get("/blogs", function(req, res){
    Blog.find({}, function(err, blogs){
        if(err){
            console.log("ERRROR");
        } else {
            res.render("index", {blogs: blogs});
        }
    });
});

// NEW ROUTE
app.get("/blogs/new", function(req, res){
    res.render("new");
});

// CREATE ROUTE
app.post("/blogs", function(req, res){
    //create blog
    Blog.create(req.body.blog, function(err, newBlog){
        if(err){
            res.render("new");
        } else {
            //then, redirect  to the index
            res.redirect("/blogs");
        }
    });
    
})


app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Baby, server is started!!! ");
});