const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/cat_app', { useNewUrlParser: true });

var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});

var Cat = mongoose.model("Cat", catSchema);
//adding a new cat to the DB

// var george = new Cat ({
//     name: "Mrs. Norris",
//     age: 1,
//     temperament: "Evil"
// });

// george.save(function(err, cat){
//     if(err){
//         console.log("ERRRRROOOOOORRRRRR")
//     } else {
//         console.log("SAVE A CAT TO THE DB:");
//         console.log(cat);

//     }
// });

Cat.create({
    name: "Snow",
    age: 15,
    temperament: "Bland"
}, function(err, cat) {
    if (err) {
        console.log("EROOOOOOOOROOOOOOOOROOOOO");
    }
    else {
        console.log(cat)
    }
});


//retrive all cats from the DB and cosole.loge each one
Cat.find({}, function(err, cats) {
    if (err) {
        console.log("ERROOORRRR");
        console.log(err);
    }
    else {
        console.log("All the Cats");
        console.log(cats);
    }

});
