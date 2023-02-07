const { User } = require("../models");
const { verifyToken } = require("../helpers/tokenHandler");

const authentication = async (req, res, next) => {
    const { access_token } = req.cookies;
    try {
        if (access_token) {
            const decodedData = await verifyToken(access_token);

            const findUser = await User.findOne({
                where: { username: decodedData.username },
            });
            if (!findUser) {
                return res
                    .status(404)
                    .json({ message: "Sorry, the user is not found" });
            }

            req.user = decodedData;
            next();
        } else {
            return res
                .status(404)
                .json({ message: "Access token is not found, Please login!!" });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: error.message });
    }
};

module.exports = authentication;
