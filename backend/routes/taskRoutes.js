const taskRouter = require('express').Router();

const Task = require("../models/Task.js");
const Project = require("../models/Project.js");
const authMiddleware = require("../utils/auth.js");

// MIDDLEWARE
taskRouter.use(authMiddleware);

// CREATE
taskRouter.post("/:projectId/tasks", async (req, res) => {
    try {
        // FIND PROJECT BY ID
        const project = await Project.findOne({
            _id: req.params.projectId,
            user: req.user._id
        });

        // CHECK IF OWNED BY USER
        if (!project) {
            return res.status(403).json({
                message: "Unauthorized or project not found."
            });
        }

        // CREATE TASK
        const task = await Task.create({
            ...req.body,
            project: req.params.projectId,
        });

        res.status(201).json(task);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// READ ALL
taskRouter.get("/:projectId/tasks", async (req, res) => {
    try {
        const project = await Project.findOne({
            _id: req.params.projectId,
            user: req.user._id
        });

        if (!project) {
            return res.status(403).json({
                message: "Unauthorized or project not found."
            });
        }

        const tasks = await Task.find({
            project: req.params.projectId,
        });

        res.json(tasks);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// UPDATE 
taskRouter.put("/:projectId/tasks/:taskId", async (req, res) => {
    try {

        const project = await Project.findOne({
            _id: req.params.projectId,
            user: req.user._id
        });

        if (!project) {
            return res.status(403).json({
                message: "Unauthorized or project not found."
            });
        }

        const updatedTask = await Task.findByIdAndUpdate(
            {
                _id: req.params.taskId,
            },
            req.body,
        );

        res.json(updatedTask);
    } catch (error) {
        res.status(500).send("There was an issue updating the task...");
    }
});

// DELETE
taskRouter.delete("/:projectId/tasks/:taskId", async (req, res) => {
    try {

        const project = await Project.findOne({
            _id: req.params.projectId,
            user: req.user._id
        });

        if (!project) {
            return res.status(403).json({
                message: "Unauthorized or project not found."
            });
        }

        const deleted = await Task.findByIdAndDelete({
            _id: req.params.taskId,
            project: req.params.projectId
        });

        res.status(200).json({ message: "Task deleted successfully." });
    } catch (error) {
        res.status(500).send("There was an issue deleting the task...");
    }
});

module.exports = taskRouter;