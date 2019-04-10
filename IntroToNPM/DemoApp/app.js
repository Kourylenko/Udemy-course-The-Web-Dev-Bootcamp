var faker = require("faker");


function totalPrise(raz) {
    
    for (var i = 1; i < raz; i++) { 
        var productName = faker.commerce.productName();
        var price = faker.commerce.price();
        console.log(productName + " - " + "$" + price);  
    }
     
}

totalPrise(10);