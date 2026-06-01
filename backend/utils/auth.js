const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET;

function authMiddleware(req, res, next) {
    try {
        let token = req.headers.authorization;

        if (!token) {
            return res.status(403).json({
                error: "No token provided"
            });
        }

        token = token.split(' ').pop().trim();

        const { data } = jwt.verify(token, secret, { maxAge: '2h' });

        req.user = data;

        next();

    } catch (error) {
        console.log(error.message);
        res.status(400).json({ message: error.message });
    }
}

module.exports = authMiddleware;