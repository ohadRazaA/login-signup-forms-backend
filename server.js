const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;
const signup = require("./routes/signup");
const login = require("./routes/login");
const userModel = require("./routes/dbConnection");

app.use(cors());
app.use(express.json());
app.use("/user", signup);
app.use("/authenticate-user", login);
app.use(userModel);

app.listen(port, () => { console.log("Server is started") });