const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET;
const Project = require("../models/Project.js");

function authMiddleware(req, res, next) {
    try {
        let token = req.headers.authorization;

        if (!token) {
            return res.status(401).json({
                error: "No token provided"
            });
        }

        token = token.split(' ').pop().trim();

        const { data } = jwt.verify(token, secret, { maxAge: '24h' });

        req.user = data;

        next();

    } catch (error) {
        console.log(error.message);
        res.status(401).json({ message: error.message });
    }
}

async function projectAuth(req, res, next) {
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

        req.project = project;
        next();

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}

module.exports = {authMiddleware, projectAuth};