const express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose")

mongoose.connect('mongodb://localhost:27017/yelp_camp', { useNewUrlParser: true });
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

//SCHEMA SETUP
const campgroundSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String
});

var Campground = mongoose.model("Campground", campgroundSchema);

// Campground.create(
//     {
//         name: "Glib Icshenko",
//         image: "https://cdn.pixabay.com/photo/2017/08/07/22/35/animals-2608662__340.jpg",
//         description: "A litpe panda slip in the hige treeeeesa/ Anj Jyfhtjn ghb!"
//     },
//     function(err, campground){
//         if (err) {
//             console.log("EROOOOOOOOROOOOOOOOROOOOO");
//         }
//         else {
//           console.log("CCREATE CAMPGROUND");
//           console.log(campground);
//         }
//     });



app.get("/", function(req, res) {
    res.render("landing");
});


// INDEX - show all campgrounds
app.get("/campgrounds", function(req, res) {
    //Get data from form DB
    Campground.find({}, function(err, allCampgrounds) {
        if (err) {
            console.log("EROOOOOOOOROOOOOOOOROOOOO");
        }
        else {
            res.render("index", { campgrounds: allCampgrounds });
        }
    });
});


// CREATE - add new campgrounds to DB
app.post("/campgrounds", function(req, res) {
    // res.send("You Hit The Post Route!")
    //gat data from form and add to campgrounds arry
    let name = req.body.name;
    let image = req.body.image;
    let desc = req.body.description;
    let newCampground = { name: name, image: image, description: desc}
    //Create a new campgroun and save to DB
    Campground.create(newCampground, function(err, newCreated) {
        if (err) {
            console.log(err);
        }
        else {
            //redirect back to compground page
            res.redirect("/campgrounds");
        }
    });
});


//NEW - show form to create new campground
app.get("/campgrounds/new", function(req, res) {
    res.render("new");
});

//SHOW - show more information about one campground
app.get("/campgrounds/:id", function(req, res) {
    //find the campground with provided ID
    Campground.findById(req.params.id, function(err, foundCampground) {
        if (err) {
            console.log(err);
        }
        else {
            // render show template with that campgriund
            res.render("show", { campground: foundCampground });
        }
    });



});

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("The YelpCamp Server Has Started!");
});
