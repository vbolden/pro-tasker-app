const userRouter = require('express').Router();
const jwt = require('jsonwebtoken');

const { authMiddleware } = require("../utils/auth.js");

const User = require('../models/User.js');
const secret = process.env.JWT_SECRET;
const expiration = "12h";

userRouter.post("/register", async (req, res) => {
    try {
        const username = await User.findOne({ username: req.body.username });

        // CHECK FOR EXISTING USERNAME
        if (username) {
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

        // CREATE TOKEN
        const token = jwt.sign({ data: payload }, secret, { expiresIn: expiration });

        const user = {
            username: newUser.username,
            email: newUser.email,
            _id: newUser._id
        };

        res.status(201).json({ token, newUser });

    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

userRouter.post("/login", async (req, res) => {
    try {
        // FIND THE USER
        const user = await User.findOne({ username: req.body.username });

        // CHECK FOR EXISTING USER
        if (!user) {
            return res.status(400).json({ message: "Incorrect username or password." });
        }

        // CHECK PASSWORD
        const correctPassword = await user.isCorrectPassword(req.body.password);

        if (!correctPassword) {
            return res.status(400).json({ message: "Incorrect username or password." });
        }

        // PAYLOAD
        const payload = {
            username: user.username,
            email: user.email,
            _id: user._id
        };

        // CREATE TOKEN
        const token = jwt.sign({ data: payload }, secret, { expiresIn: expiration });

        delete user.password;
        res.status(200).json({ token, user });

    } catch (error) {

        res.status(400).json({ message: error.message });
    }
});

// VERIFY USER TOKEN
userRouter.use(authMiddleware);

// SEND BACK USER DETAILS AFTER VERIFICATION
userRouter.get("/", (req, res) => {
    res.status(200).json(req.user);
});

module.exports = userRouter;