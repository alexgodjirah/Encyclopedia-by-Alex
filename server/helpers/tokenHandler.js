require("dotenv").config();
const jwt = require("jsonwebtoken");
const secret_key = String(process.env.SECRET_KEY);

async function generateToken(payload) {
    return jwt.sign(payload, secret_key, {
        expiresIn: "3d",
    });
}

async function verifyToken(token) {
    return jwt.verify(token, secret_key);
}

module.exports = {
    generateToken,
    verifyToken,
};
