const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

// const DATABASE_URL = "mongodb+srv://Ohad-Raza:mongodb321@cluster0.4qzraz1.mongodb.net/users"

const mongoString = process.env.DATABASE_URL
mongoose.connect(mongoString);
database = mongoose.connection;

database.on("error", (error) => {
    console.log(error);
})

database.once("connected", () => {
    console.log("Database Connected");
});

const userSchema = new mongoose.Schema({
    firstName: {
        required: true,
        type: String
    },
    lastName: {
        required: true,
        type: String
    },
    email: {
        required: true,
        type: String,
        unique: true
    },
    password: {
        required: true,
        type: String,
    }
});
const userModel = new mongoose.model("allUsers", userSchema);

module.exports = userModel;