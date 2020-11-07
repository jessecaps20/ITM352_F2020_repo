
// Java Script Server 
// Referenced Copied from Assignment 1 screencast and Lab13

var express = require('express'); 
var app = express();
var fs = require ('fs');
var express = require('express'); 
var myParser = require("body-parser"); 
var products = require("./public/product.js");

app.use(express.static('./public')); 
app.use(myParser.urlencoded({ extended: true }));

