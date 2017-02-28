var express = require('express');
var app = express();
var bodyParse =   require('body-parser');
var mongoose = require('mongoose');
app.use(bodyParse.json());

var Users = require('./models/annam/users');
var Foods = require('./models/annam/food');

//mongoose.connect("mongodb://localhost/jjj");
mongoose.connect('mongodb://Gopinath:Gopi$vicky1@ds027896.mlab.com:27896/jjj');
var db= mongoose.connection;
app.get('/',function (req,res) {
    res.send('Hello Working');
})

app.post('/api/users',function (req,res) {
    var user= req.body;
    console.log(user);
    Users.addUser(user,function (err,data) {
        if(err)
        {
            throw err;
        }
        res.json(data);
    })
})

app.get('/api/users',function (req,res) {
    Users.getUsers(function (err,data) {
        if(err)
        {
            throw err;
        }
        res.json(data);
    },10)
})

app.get('/api/food/:limit',function (req,res) {
    var limit= req.params.limit;
    Foods.getFood(function (err,data) {
        if(err)
        {
            throw err;
        }
        res.json(data);
    },limit);
})
app.get('/api/searchByCity/:term',function (req,res) {
    var term = req.params.term; 
    console.log(term);
    Foods.searchByCity(term,function (err,data) {
        if(err)
        {

        }
        res.json(data);
    })
})

app.post('/api/food',function (req,res) {
    var food= req.body;
    Foods.addFood(food,function (err,data) {
        if(err)
        {
            throw err;
        }
        res.json(data);
    })
})

process.on('uncaughtException', function (err) {
  console.error(err);
  console.log("Node NOT Exiting...");
});


app.listen(3000);
console.log("App Running on port 3000");
