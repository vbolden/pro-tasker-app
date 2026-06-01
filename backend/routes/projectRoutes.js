const projectRouter = require('express').Router();
const Project = require("../models/Project.js");
const authMiddleware = require("../utils/auth.js");

// MIDDLEWARE
projectRouter.use(XPathExpression.json());
projectRouter.use(authMiddleware);

// CREATE

// READ ALL
projectRouter.get("/", async (req, res) => {
    try {
        const projects = await Project.find({ user: req.user._id });

        res.json(projects);
    } catch (error) {

    }
});

// READ ONE

// UPDATE

// DELETE

module.exports = projectRouter;