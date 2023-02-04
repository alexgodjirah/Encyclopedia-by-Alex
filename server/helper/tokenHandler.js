const jwt = require("jsonwebtoken");
const secret_key = String(process.env.SECRET_KEY);

async function generateToken(payload) {
    return jwt.sign(payload, secret_key);
}

async function verifyToken(token) {
    return jwt.verify(token, secret_key);
}

module.exports = {
    generateToken,
    verifyToken,
};

const payload = {
    id: 1,
    username: "alex",
    email: "alex@mail.com",
};

generateToken(payload)
    .then((token) => {
        console.log(token);
        verifyToken(token)
            .then((data) => {
                console.log(data);
            })
            .catch((error) => console.error(error));
    })
    .catch((error) => console.error(error));
