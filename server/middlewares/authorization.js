const { User } = require("../models");
const { verifyToken } = require("../helpers/tokenHandler");

const authorization = async (req, res, next) => {
    const { access_token } = req.cookies;

    try {
        if (!access_token) {
            return res.status(404).json({
                message:
                    "Who on earth you? Get your ass to the login/register page",
            });
        }

        const decodedData = await verifyToken(access_token);

        if (decodedData.role !== "admin") {
            return res.status(401).json({
                message: "Only admin is authorized to enter this page",
            });
        }

        next();
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: error.message });
    }
};

module.exports = authorization;
