const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

let campgrounds = [
    { name: "Tanya Kurylenko", image: "https://image.freepik.com/free-photo/pink-cherry-blossom-marble-textured-background_23-2148061495.jpg" },
    { name: "Olga Kurylenko", image: "https://image.freepik.com/free-vector/wild-rose-frame_53876-86241.jpg" },
    { name: "Pavel Kurylenko", image: "https://image.freepik.com/free-vector/floral-design-wedding-invitation_53876-87364.jpg" },
    { name: "Tanya Kurylenko", image: "https://image.freepik.com/free-photo/pink-cherry-blossom-marble-textured-background_23-2148061495.jpg" },
    { name: "Olga Kurylenko", image: "https://image.freepik.com/free-vector/wild-rose-frame_53876-86241.jpg" },
    { name: "Pavel Kurylenko", image: "https://image.freepik.com/free-vector/floral-design-wedding-invitation_53876-87364.jpg" },
    { name: "Tanya Kurylenko", image: "https://image.freepik.com/free-photo/pink-cherry-blossom-marble-textured-background_23-2148061495.jpg" },
    { name: "Olga Kurylenko", image: "https://image.freepik.com/free-vector/wild-rose-frame_53876-86241.jpg" },
    { name: "Pavel Kurylenko", image: "https://image.freepik.com/free-vector/floral-design-wedding-invitation_53876-87364.jpg" }
]

app.get("/", function(req, res) {
    res.render("landing");
});

app.get("/campgrounds", function(req, res) {
    res.render("campgrounds", { campgrounds: campgrounds });
});


app.post("/campgrounds", function(req, res) {
    // res.send("You Hit The Post Route!")
    //gat data from form and add to campgrounds arry
    let name = req.body.name;
    let image = req.body.image;
    let newCampGround = { name: name, image: image }
    campgrounds.push(newCampGround);
    //redirect back to compground page
    res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res) {
    res.render("new");
});















app.listen(process.env.PORT, process.env.IP, function() {
    console.log("The YelpCamp Server Has Started!");
});
