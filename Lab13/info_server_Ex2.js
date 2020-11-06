var express = require('express');
var app = express();
var myParser = require("body-parser");

app.all('*', function (request, response, next) {
    console.log(request.method + ' to path ' + request.path);
    next();
});

app.use(myParser.urlencoded({ extended: true }));
app.post("/process_form", function (request, response) {
   let POST = request.body;
   if(isNonNegInt(POST["quantity_textbook"])) {
    response.send(`Thank you for purchasing ${POST["quantity_textbook"]} items!`); 
   } else {
    response.send(`Hey ${POST["quantity_textbook"]} is not valid!`);
   }
});

app.get('/hello.txt', function (request, response, next) {
    response.send("Got a POST to /test path");
    next();
});

app.use(express.static('./public'));

app.listen(8080, () => console.log(`listening on port 8080`)); // note the use of an anonymous function here

function isNonNegInt(q, returnErrors = false) {
    errors = []; // assume no errors at first
    if(Number(q) != q) errors.push('Not a number!'); 
    else {
        if(q < 0) errors.push('Negative value!'); 
        if(parseInt(q) != q) errors.push('Not an integer!'); 
    }
    return returnErrors ? errors : ((errors.length > 0)?false:true);
}