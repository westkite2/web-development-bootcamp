const express = require("express");
const https = require("https"); //native node https module - no need for installation
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){
    const query = req.body.cityName
    const appid = ""
    const unit = "metric"
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + appid + "&units=" + unit
    
    https.get(url, function(response){
        //perform get request using https protocol
        console.log(response.statusCode);
        response.on("data", function(data){
            //console.log(data);
            const weatherData = JSON.parse(data); //parse to js object
            const temperature = weatherData.main.temp
            const description  = weatherData.weather[0].description
            const icon = weatherData.weather[0].icon
            const imageURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png"
            
            console.log(weatherData);
            console.log(temperature)
            console.log(description);
            // const object = {
            //     name : "Seoyeon",
            //     nation : "Korea"
            // }
            // console.log(JSON.stringify(object));
            
            res.write("<p>The weather is currenty " + description + "</p>");
            res.write("<h1>The temperature in " + query + " is " + temperature + " degrees C.</h1>");
            res.write("<img src=" + imageURL + ">");
            res.send();
        })
    })

    //res.send("server running");
    })

app.listen(3000, function(){
    console.log("Server running on port 3000.");
})