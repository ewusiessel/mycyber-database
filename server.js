const express = require("express"); // 1. creating server app

const dotenv = require("dotenv").config() //5. add the .env

const app = express() //3. add 

const port = process.env.PORT || 5000; // 2. define the port / 6 add the env


app.get("/api/contacts", (req, res) => { //7. add this 
    // res.send("Get all contacts");
    // res.json({message: "Get all f**king contacts"});
    res.status(200).json({message: "Get all f**king contacts"}); // if you want message in a json format
})


//4. call back for listening on the port created
app.listen(port, () => {
    console.log(`Server running on port ${port} 🚀`)
});