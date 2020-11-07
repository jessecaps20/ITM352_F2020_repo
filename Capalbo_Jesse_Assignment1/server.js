
// Java Script Server 
// Referenced from Assignment 1 screencast and Lab13
var products = require("./public/product.js");
var querystring = require('querystring'); //server responds to any errors
var express = require('express'); //express package
var app = express(); // initialize express
var myParser = require("body-parser"); //load body parser 

app.all('*', function (request, response, next) { //for all request methods
    console.log(request.method + ' to ' + request.path); //type in the console the request method and the path
    next(); 
});
app.use(myParser.urlencoded({ extended: true })); //get data in the body

app.post("/process_form", function (request, response) { //validate quantity data before sending to invoice
    let POST = request.body; 
    response.send(POST);
    if (typeof POST['submitPurchase'] != 'undefined') {
        var validQuantities = true; 
        var quantities = false
        for (i = 0; i < products.length; i++) {
            qty = POST[`quantity${i}`];
            quantities = quantities || qty > 0; // If larger than 0 then it is okay
            validQuantities = validQuantities && isNonNegInt(qty);    // if both a quantity over 0 and valid   
        }
        const stringified = queryString.stringify(POST);// if all quantities are valid invoice is generated
        if (validQuantities && quantities) {
            response.redirect("./invoice.html?" + stringified); 
        }
        else { response.send('Enter a valid quantity!') } // if quantities are not valid send message
    }
    response.send(POST);
});
function isNonNegInt(q, returnErrors = false) { //isNonNegInt function that returns errors 
    errors = []; 
    if (q == "") { q = 0; }
    if (Number(q) != q) errors.push('Not a number!'); 
    if (q < 0) errors.push('Negative value!'); 
    if (parseInt(q) != q) errors.push('Not an integer!'); 
    return returnErrors ? errors : (errors.length == 0);
}
app.use(express.static('./public')); //set up a static route with public folder
app.listen(8080, () => console.log(`listening on port 8080`)); //run server on port 8080
