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
    },
    userType: {
        type: String,
        enum: ["Member", "Employee"],
        required: true
    },
    permissions: {
        userPermission: {
            type: Boolean,
            default: false
        },
        orderPermission: {
            type: Boolean,
            default: false
        },
        stockPermission: {
            type: Boolean,
            default: false
        }
    }
});

// Create a model from the schema
const User = mongoose.model("User", userSchema);

app.post("/signup", async (req, res) => {
    const { email, password, userType, permissions } = req.body;

    // Check if the user already exists
    const user = await User.findOne({ email });
    if (user) {
        return res.status(400).json({ error: "User already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({
        email,
        password: hashedPassword,
        userType,
        permissions: userType === "Employee" ? permissions : undefined // Assign permissions if Employee
    });

    // Save the user to the database
    await newUser.save();

    // Generate a JWT token
    const token = jwt.sign({ userId: newUser._id }, "secretkey");

    // Return the token to the client
    res.status(201).json({ token });
});

app.post("/login", async (req, res) => {
    const { email, password } = req.body;

    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
        return res.status(401).json({ error: "Invalid credentials" });
    }

    // Check if the password is correct
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        return res.status(401).json({ error: "Invalid credentials" });
    }

    // Generate a JWT token
    const token = jwt.sign({ userId: user._id }, "secretkey");

    // Return the token, user type, and permissions to the client
    res.json({ token, userType: user.userType, permissions: user.permissions });
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