const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");

const app = express();
app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/signup.html");
})

app.post("/", function(req, res){

    const mailchimpKey = ""
    const mailchimpId = "";

    const firstName = req.body.fname;
    const lastName = req.body.lname;
    const email = req.body.email;
    
    const data = {
        members: [
            {
                email_address: email,
                status: "subscribed",
                merge_fields:{
                    FNAME: firstName,
                    LNAME: lastName
                }

            }
        ]
    }

    const jsonData = JSON.stringify(data);
    
    const url = "https://us10.api.mailchimp.com/3.0/lists/" + mailchimpId;
    const options = {
        method: "POST",
        auth: "anystring:" + mailchimpKey
    }
    const request = https.request(url, options, function(response){
        response.on("data", function(data){
            console.log(JSON.parse(data));
            if(response.statusCode == 201){
                // res.send("successfully subscribed!");
                res.sendFile(__dirname + "/success.html");
            }else{
                // res.send("error happend. Try again.");
                res.sendFile(__dirname + "/failure.html");
            }
        })
    })

    request.write(jsonData);
    request.end();
    
})

app.post("/failure", function(req, res){
    res.redirect("/");
})
app.listen(3000, function(){
    console.log("server is running on port 3000");
})
