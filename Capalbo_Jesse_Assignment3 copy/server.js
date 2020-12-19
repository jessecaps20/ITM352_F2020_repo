//CURRENTLY COMMENTING ALL MY CODE!!!//

var product_data = require('./public/product_data.js'); 
var express = require('express'); 
var app = express(); 
var myParser = require("body-parser"); 
const querystring = require('querystring'); 
var fs = require('fs'); 
var cookieParser = require('cookie-parser')
var session = require('express-session');
const user_data_filename = 'userdata.json';
const nodemailer = require("nodemailer");

app.use(session({secret: "ITM352 rocks!"})); 
app.use(cookieParser());
app.use(myParser.urlencoded({ extended: true }));
app.use(myParser.json());

if(fs.existsSync(user_data_filename)) {
    stats = fs.statSync(user_data_filename);
    console.log(`user_data.json has ${stats['size']} characters`);
    var data = fs.readFileSync(user_data_filename, 'utf-8');
    users_reg_data = JSON.parse(data);
}
app.all('*', function (request, response, next) {
    console.log(request.method + ' to ' + request.path);
    next(); 
});
app.post("/process_login", function (request, response) {
    POST = request.body;
    if(typeof users_reg_data[request.body.username] != 'undefined') {
        if(request.body.password == users_reg_data[request.body.username].password) {
            if (typeof request.session.login == 'undefined') {
                request.session.login = {};
            }
            if (typeof request.session.login.username == 'undefined') {
                request.session.login.username = [POST.username];
            }
            if (typeof request.session.login.password == 'undefined') {
                request.session.login.password = [POST.password];
            }
          console.log(request.session);
          response.cookie('username', POST.username);
          alertstr = `<script> alert("Successful login!");
                        window.history.back() </script>`;

            response.send(alertstr);
        } else {
            alertalert = `<script> alert("Wrong Password!");
                        window.history.back() </script>`;
            response.send(alertalert);
        }
    } else {
        alertalert = `<script> alert("Username Does Not Exist");
                        window.history.back() </script>`;
    response.send(alertalert);
}
});

app.post("/add_to_cart", function (request, response) {
   
    var POST = request.body
    console.log(POST);

  
    has_errors = false;

    if (has_errors == false) {
        if (typeof request.session.cart == 'undefined') {
            request.session.cart = {};
        }
        if (typeof request.session.cart[POST.product_key] == 'undefined') {
            request.session.cart[POST.product_key] = [];
        }
        request.session.cart[POST.product_key][POST.product_index] = Number.parseInt(POST.quantity);
        response_msg = `${POST.quantity} Added`;
    }
    response_msg = `${POST.quantity} Added`;
    console.log(request.session);
    response.json({"message":response_msg});
    
});

app.post("/get_cart_data", function (request, response) {
    if (typeof request.session.cart == 'undefined') {
        request.session.cart = {};
    }
    response.json(request.session.cart);
});
app.get("/complete_order", function (request, response) {
    let str = '<h1>Thank you for shopping with us. ROCK ON</h1>';
    var transporter = nodemailer.createTransport({
        host: "mail.hawaii.edu",
        port: 25,
        secure: false, 
        tls: {
        
          rejectUnauthorized: false
        }
      });
      var user_email = 'jcapalbo@hawaii.edu';
      var mailOptions = {
        from: 'jcapalbo@test.com',
        to: user_email,
        subject: 'Your Invoice',
        html: str
      };
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          str += '<br>ERROR: invoice could not be emailed';
        } else {
          str += `<br>Your invoice was mailed to ${user_email}`;
        }
        response.send(str);
      });
});


 function isNonNegIntString(string_to_check, returnErrors = false) {
    errors = []; 
    if (Number(string_to_check) != string_to_check) { errors.push('<font color = "red">Not a number!</font color = "red">'); } 
    else { 
        if (string_to_check < 0) { errors.push('<font color = "red">Negative value!</font color = "red">'); } 
        if (parseInt(string_to_check) != string_to_check) { errors.push('<font color = "red">Not an integer!</font color = "red">'); } 
    }
    return returnErrors ? errors : (errors.length == 0); 
}


function checkQuantityTextbox(theTextbox) {
    errs = isNonNegIntString(theTextbox.value, true);
    if (errs.length == 0) errs = ['You want:'];
    if (theTextbox.value.trim() == '') errs = ['Quantity'];
    document.getElementById(theTextbox.name + '_label').innerHTML = errs.join(" "); 
}

app.use(express.static('./public')); //Searchs for files in the public directory 
app.listen(8080, () => console.log(`listening on port 8080`)); // starts listening for requests on port 8080