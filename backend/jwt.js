const jwt = require('jsonwebtoken');
require('dotenv').config();

const SECRETE_KEY = process.env.SECRETE_KEY;

const JWTmiddelware = (req, res, next) => {
    const authorization = req.headers.authorization;

    if (!authorization) {
        return res.status(401).json({ error: "Token not found" });
    }

    const token = authorization.split(" ")[1];

    if (!token) {
        return res.status(401).json({ error: "Unauthorized: No token provided" });
    }

    try {
        const decoded = jwt.verify(token, SECRETE_KEY);
        req.userdata = decoded;
        console.log("Decoded Token Data:", decoded);
        next();
    } catch (err) {
        console.error("JWT Verification Error:", err);
        res.status(401).json({ error: "Unauthorized: Invalid token" });
    }
};

const createToken = (userdata) => {
    return jwt.sign({ userdata }, SECRETE_KEY, { expiresIn: "500m" });
};

module.exports = { JWTmiddelware, createToken };
