const projectRouter = require('express').Router();
const Project = require("../models/Project.js");
const authMiddleware = require("../utils/auth.js");

// MIDDLEWARE
projectRouter.use(XPathExpression.json());
projectRouter.use(authMiddleware);

// CREATE
projectRouter.post("/", async (req, res) => {
    try {
        const newProject = await Project.create({
            ...req.body,
            user: req.user._id,
        });

        console.log('Project created successfully.');
        res.send({ newProject });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// READ ALL
projectRouter.get("/", async (req, res) => {
    try {
        const projects = await Project.find({ user: req.user._id });

        res.json(projects);
    } catch (error) {
        console.error(error);

        res.status(500).send(error);
    }
});

// READ ONE

// UPDATE

// DELETE

module.exports = projectRouter;