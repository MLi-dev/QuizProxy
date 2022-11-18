const express = require("express")
const app = express()
const logger = require("morgan")
const axios = require("axios"); 


app.use(logger("tiny"))

app.get("/", (req, res) => {
    axios.get("https://quizapi.io/api/v1/questions?apiKey=GqUHpV0I96SwSw9eEHOll244Azgj8dLWdE2Oti4r&limit=10")
    .then(response => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Origin", "http://localhost:3000");
        res.header("Content-Type", "application/json");
        res.send(response.data); 
    })
    .catch(error => {
        console.log(error); 
    })
})


module.exports = app 