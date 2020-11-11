
// Java Script Server 
// copied/referenced from Assignment 1 screencast and Lab13 and stack exchange
var products = require("./public/product_data.json");//load products from json file
var querystring = require('querystring'); //server responds to any errors
var express = require('express'); //express package
var app = express(); // initialize express
var myParser = require("body-parser"); //load body parser 

app.all('*', function (request, response, next) { //for all request methods
    console.log(request.method + ' to ' + request.path); //type in the console the request method and the path
    next(); // program can move on
});
app.use(myParser.urlencoded({ extended: true })); //get data in the body
app.post("/process_form", function (request, response) { //validate quantity data before sending to invoice
    let POST = request.body; // packages data in the body
    if (typeof POST['submitPurchase'] != 'undefined') {
        response.send("Invalid Entry!");
    }
    let validQuantities = []; //array assuiming quantities are valid all quantities
    let hasErrors = false; // develop a variable to assume that is false
    for (i in products) {  //returns true if the "i" is in the specified object of products
        qty = POST[`quantity${i}`];
        if (qty != '' || qty > 0) validQuantities.push(isNonNegInt(qty)); // if both a quantity over 0 and valid
    }
    hasErrors = validQuantities.includes(false);
    const stringified = querystring.stringify(POST);// if all quantities are valid invoice is generated
    if (validQuantities.length != 0 && !hasErrors) {
        response.redirect("./invoice.html?" + stringified); 
    }
    else { response.send('Enter a valid quantity!') } // if quantities are not valid send message
});
function isNonNegInt(q, returnErrors = false) { //isNonNegInt function that returns errors 
    errors = []; // assume that quantity data is valid 
    if (q == "") { q = 0; }
    if (Number(q) != q) errors.push('Not a number!'); //check if the string is a number
    if (q < 0) errors.push('Negative value!'); //check if value is a positive
    if (parseInt(q) != q) errors.push('Not an integer!'); //check if value is an integer
    return returnErrors ? errors : (errors.length == 0);
}
app.use(express.static('./public')); //set up a static route with public folder
app.listen(8080, () => console.log(`listening on port 8080`)); //run server on port 8080
