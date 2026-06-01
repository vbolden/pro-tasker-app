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
        res.send(newProject);
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
projectRouter.get("/:id", async (req, res) => {
    try {
        const project = await Project.findById({
            _id: req.params.id,
            user: req.user._id
        });

        res.json(project);
    } catch (error) {
        res.status(500).send("Project Not Found.");
    }
});

// UPDATE
projectRouter.put("/:id", async (req, res) => {
    try {
        const updatedProject = await Project.findByIdAndUpdate(
            req.params.id,
            req.body,
            { returnDocument: "after" }
        );

        res.json(updatedProject);
    } catch (error) {
        console.error(error);

        res.status(500).send("Issue with updating the project...")
    }
});

// DELETE

module.exports = projectRouter;