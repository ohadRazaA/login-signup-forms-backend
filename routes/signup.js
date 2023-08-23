const express = require("express");
const route = express.Router();
const userModel = require("./dbConnection");

route.post("/", async (req, res) => {
    const myUser = new userModel(
        {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password
        }
    );
    try {
        const dataToSave = await myUser.save();
        res.send("form Sumbitted");
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
});

module.exports = route;