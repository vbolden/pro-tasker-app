const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    name: {},
    description: {},
    status: {},
    project: {},
});

const Task = mongoose.model("Task", taskSchema);
module.exports = Task;