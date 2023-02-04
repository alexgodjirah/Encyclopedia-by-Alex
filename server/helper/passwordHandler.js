const bcrypt = require("bcrypt");
const salt = process.env.SALT;

function hashPassword(password) {
    return bcrypt.hashSync(password, parseInt(salt));
}

async function verifyPassword(password, hashed_password) {
    return await bcrypt.compare(password, hashed_password);
}

module.exports = {
    hashPassword,
    verifyPassword,
};
