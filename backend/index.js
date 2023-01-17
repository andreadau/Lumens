const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
const cors = require("cors");
const bcrypt = require("bcrypt");
require('dotenv').config()
const app = express();
const connection = process.env.DB_CONNECTION

app.use(bodyParser.json());
app.use(cors());
mongoose.set('strictQuery', true);

// Define a user schema
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

// Create a model from the schema
const User = mongoose.model("User", userSchema);

app.post("/signup", async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    // check if the user already exists
    const user = await User.findOne({ email });
    if (user) {
        return res.status(400).json({ error: "User already exists" });
    }

    // hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // create a new user
    const newUser = new User({
        email,
        password: hashedPassword
    });

    // save the user to the database
    await newUser.save();

    // generate a JWT token
    const token = jwt.sign({ userId: newUser._id }, "secretkey");

    // return the token to the client
    res.status(201).json({ token });
});

app.post("/login", async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    // find the user by email
    const user = await User.findOne({ email });
    if (!user) {
        return res.status(401).json({ error: "Invalid credentials" });
    }

    // check if the password is correct
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        return res.status(401).json({ error: "Invalid credentials" });
    }

    // generate a JWT token
    const token = jwt.sign({ userId: user._id }, "secretkey");

    // return the token to the client
    res.json({ token });
});

mongoose
    .connect(
        connection,
        { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(() => {
        app.listen(3011, () => {
            console.log("Server started on port 3011");
        });
    })
    .catch((error) => {
        console.log("Error connecting to the database:", error);
    });