const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
    name: {},
    description: {},
});

const Project = mongoose.model("Project", projectSchema);
module.exports = Project;