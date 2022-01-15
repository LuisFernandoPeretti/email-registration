const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");


//middleware
app.use(cors());
app.use(express.json());

//routes

//create a register

//get all register

//get a register

//delete a register

app.listen(5000, () => {
    console.log("Server has startes on port 5000");
});