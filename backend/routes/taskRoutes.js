const taskRouter = require('express').Router();

const Task = require("../models/Task.js");
const { authMiddleware, projectAuth } = require("../utils/auth.js");

// MIDDLEWARE
taskRouter.use(authMiddleware);

// CREATE
taskRouter.post("/:projectId/tasks", projectAuth, async (req, res) => {
    try {
        // CREATE TASK
        const task = await Task.create({
            ...req.body,
            project: req.project._id,
        });

        res.status(201).json(task);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// READ ALL
taskRouter.get("/:projectId/tasks", projectAuth, async (req, res) => {
    try {
        const tasks = await Task.find({
            project: req.params.projectId,
        });

        res.json(tasks);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// UPDATE 
taskRouter.put("/:projectId/tasks/:taskId", projectAuth, async (req, res) => {
    try {
        const updatedTask = await Task.findOneAndUpdate(
            {
                _id: req.params.taskId,
                project: req.params.projectId
            },
            req.body,
            { new: true },
        );

        if (!updatedTask) {
            return res.status(404).json({
                message: "Task not found."
            });
        }

        res.json(updatedTask);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// DELETE
taskRouter.delete("/:projectId/tasks/:taskId", projectAuth, async (req, res) => {
    try {
        const deleted = await Task.findOneAndDelete({
            _id: req.params.taskId,
            project: req.params.projectId
        });

        if (!deleted) {
            return res.status(404).json({
                message: "Task not found."
            });
        }

        res.status(200).json({ message: "Task deleted successfully." });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = taskRouter;