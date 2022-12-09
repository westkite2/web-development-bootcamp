//jshint esversion:6
require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
// const encrypt = require("mongoose-encryption");
// const md5 = require("md5");
const bcrypt = require("bcrypt");
const saltRounds = 10;


const app = express();

app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));


mongoose.connect(process.env.uri, { useNewUrlParser: true}
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
});


const userSchema = new mongoose.Schema ({
    email: String,
    password: String
});

/* mongoose-encryption (save->encrypt, find->decrypt) */
// userSchema.plugin(encrypt, {secret: process.env.secret, encryptedFields: ["password"]});

const User = new mongoose.model("User", userSchema);


app.get("/", function(req, res){
    res.render("home");
})

app.get("/login", function(req, res){
    res.render("login");
})


app.get("/register", function(req, res){
    res.render("register");
})

app.post("/register", function(req, res){
    
    bcrypt.hash(req.body.password, saltRounds, function(err, hash){
        //after bcrypting..

        const newUser = new User({
            email: req.body.username,
            //password: md5(req.body.password)
            password: hash
        });
    
        newUser.save(function(err){
            if(err){
                console.log(err);
            }else{
                res.render("secrets");
            }
        });
    })

});

app.post("/login", function(req, res){
    const username = req.body.username;
    // const password = md5(req.body.password);
    const password = req.body.password;

    User.findOne({email: username}, function(err, foundUser){
        if(err){
            console.log(err);
        }else{
            if(foundUser){

                /* using md5 */
                // if(foundUser.password === password){
                //     res.render("secrets");
                // }

                bcrypt.compare(password, foundUser.password, function(err, result){
                    if(result === true){
                        res.render("secrets");
                    }
                });

            }
        }
    })
});

app.listen(3000, function(){
    console.log("Server started on port 3000");
});
