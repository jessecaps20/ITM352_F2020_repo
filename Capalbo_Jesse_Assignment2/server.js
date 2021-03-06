
// Java Script Server 
// copied/referenced from Assignment 1 screencast, Lab13, Lab14 and stack exchange
var products = require("./public/product_data.json");//load products from json file
const querystring = require('querystring'); //server responds to any errors
var express = require('express'); //express package
var app = express(); // initialize express
var myParser = require("body-parser"); //load body parser 
var fs = require('fs'); // require file system from node
var filename = 'userdata.json' //defines array as object
var users_reg_data = {}; // define variable

if (fs.existsSync(filename)) { //Only open the file if it exists 
    let data = fs.readFileSync(filename, 'utf-8'); //read the file synchronously until the file comes back
    users_reg_data = JSON.parse(data); //Load users_reg_data from userdata.json
} else {
    console.log(filename + 'does not exist!'); //filename does not exist
}

app.all('*', function (request, response, next) { //for all request methods
    console.log(request.method + ' to ' + request.path); //type in the console the request method and the path
    next(); // program can move on
});

app.use(myParser.urlencoded({ extended: true })); //get data in the body
app.post("/process_form", function (request, response) { //validate quantity data before sending to invoice
    let POST = request.body; // packages data in the body
    console.log(POST)
    if (typeof POST['submit_purchase'] != 'undefined') {
        response.send("Invalid Entry!");
    }
    let validQuantities = []; //array assuiming quantities are valid all quantities
    let hasErrors = false; // develop a variable to assume that is false
    for (i in products) {  //returns true if the "i" is in the specified object of products
        qty = POST[`quantity${i}`];
        ///console.log(i, qty)
        if (qty != '' || qty > 0) validQuantities.push(isNonNegInt(qty)); // if both a quantity over 0 and valid
    }
    hasErrors = validQuantities.includes(false);
    const stringified = querystring.stringify(POST);// if all quantities are valid invoice is generated
    if (validQuantities.length != 0 && !hasErrors) {
        response.redirect("./login.html?" + stringified);
    }  else { response.redirect("./product_display.html?" + stringified) } // if quantities are not valid send message
});
//Server-side processing from Lab13
app.post("/process_login", function (request, response) {
    var LogError = [];
    console.log(request.query);
    the_username = request.body.username.toLowerCase(); //makes username case insensitive
    if (typeof users_reg_data[the_username] != 'undefined') { //check if username actually exists
        if (users_reg_data[the_username].password == request.body.password) { //if the username exists ask for the password
            request.query.username = the_username;
            console.log(users_reg_data[request.query.username].name);
            request.query.name = users_reg_data[request.query.username].name;
            response.redirect('./invoice.html?' + querystring.stringify(request.query));//if all good redirect to invoice
            return; //if all good redirect to invoice//
        } else { // or else notify of invalid password
            LogError.push = ('Invalid Password'); 
            console.log(LogError);
            request.query.username = the_username;
            request.query.name = users_reg_data[the_username].name;
            request.query.LogError = LogError.join(';');
        }
    } else {
        LogError.push = ('Invalid Username'); //Username does not exist
        console.log(LogError);
        request.query.username = the_username;
        request.query.LogError = LogError.join(';');
    }
    response.redirect('./login.html?' + querystring.stringify(request.query));
});
//From Lab 13
//Server-side processing
app.post("/process_register", function (request, response) {
    console.log(request.body);
    var errors = [];
    var reguser = request.body.username.toLowerCase(); //makes username case insensitive
    if (typeof users_reg_data[reguser] != 'undefined') { //Check if username already exists
        errors.push('Username is Already in Use.')
    }
    if ((/[a-z0-9]+/).test(request.body.username) == false) {//Check if there are other symbols instead of numberd and letters
        errors.push('Numbers and Letters only'); //Check if there are other symbols instead of numberd and letters
    }
    if ((request.body.password.length < 6 == true)) {//password validation
        errors.push('Password Too Short - 6 characters minimum'); //Check if password is too short
    }
    if (request.body.password !== request.body.repeat_password) {// check to see if passwords match
        errors.push('Passwords Do Not Match') //Check if passwords match
    }
    if (errors.length == 0) {//if there are no errors, the login info is remembered, referenced from lab 14
        POST = request.body;
        var username = POST["username"];
        users_reg_data[username] = {}; 
        users_reg_data[username].name = username;
        users_reg_data[username].password = POST['password'];
        users_reg_data[username].email = POST['email'];
        data = JSON.stringify(users_reg_data); 
        fs.writeFileSync(filename, data, "utf-8");
        response.redirect('./invoice.html?' + querystring.stringify(request.query))
    }
    if (errors.length > 0) { //directs user to registration page if there are any errrors
        console.log(errors)
        request.query.name = request.body.name;
        request.query.username = request.body.username;
        request.query.password = request.body.password;
        request.query.repeat_password = request.body.repeat_password;
        request.query.email = request.body.email;
        request.query.errors = errors.join(';');
        response.redirect('registration.html?' + querystring.stringify(request.query));
    }
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
