const userRouter = require('express').Router();
const jwt = require('jsonwebtoken');

const authMiddleware = require("../utils/auth.js");

const User = require('../models/User.js');
const secret = process.env.JWT_SECRET;
const expiration = "12h";

userRouter.post("/register", async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username });

        // CHECK FOR EXISTING USERNAME
        if (user) {
            return res.status(400).json({
                error: "A user with this username already exists."
            });
        }

        // CREATE NEW USER
        const newUser = await User.create(...req, body);

        // PAYLOAD
        const payload = {
            username: newUser.username,
            email: newUser.email,
            _id: newUser._id
        };

        res.status(201).json({ token, newUser });

    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});