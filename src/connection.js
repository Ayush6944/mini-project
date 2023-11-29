

const express = require("express");
const app = express();
require("./db/connect");
const Register = require("./models/register");

export default function saveit(){

app.post("/signup", async (req, res) => {
    try {
        const customer = new Register({
            name: req.body.Name,
            phone: req.body.number,
            email:req.body.email,
            password:req.body.password,
            gender:req.body.Gender 
        })
        const registered= await customer.save();
        res.status(201);
    } catch(err) {
        res.status(400).send(err);
    }
});}