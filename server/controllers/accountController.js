const { User, Profile } = require("../models");
const { hashPassword } = require("../helpers/passwordHandler");
const { generateToken } = require("../helpers/tokenHandler");

class AccountController {
    static async readAccount(req, res) {
        const { id } = req.user;

        try {
            if (!id) {
                return res
                    .status(404)
                    .json({ message: "ID is ot found, please try again" });
            }

            const findAccount = await User.findOne({ where: { id: id } });
            if (!findAccount) {
                return res
                    .status(404)
                    .json({ message: "User's account isn' found" });
            }

            return res.status(200).json(findAccount);
        } catch (error) {
            console.log(error);
            return res
                .status(500)
                .json({ message: `${error.message}, Bad Request!` });
        }
    }

    static async updateAccount(req, res) {
        const { id } = req.user;
        const { username, email, password } = req.body;

        try {
            if (!id) {
                return res
                    .status(404)
                    .json({ message: "ID is not found, please try again" });
            }

            const payload_user = {
                username: username,
                email: email,
                password: hashPassword(password),
                updatedAt: new Date(),
            };

            const updatedUser = await User.update(payload_user, {
                where: { id: id },
            });
            if (!updatedUser) {
                return res
                    .status(400)
                    .json({ message: "Bad Request! Please try again. " });
            }

            // Generate Updated Access Token
            const payload_access_token = {
                id: id,
                username: username,
                email: email,
            };
            const access_token = await generateToken(payload_access_token);
            if (!access_token) {
                return res
                    .status(400)
                    .json({ message: "Bad Request! Please try again" });
            }

            res.cookie("access_token", access_token, {
                httpOnly: true,
            });

            return res.status(200).json({
                message: `Congratulation ${username}!! User's account is updated`,
            });
        } catch (error) {
            console.log(error);
            return res
                .status(500)
                .json({ message: `${error.message}. Bad Request!` });
        }
    }

    static async deleteAccount(req, res) {
        const { id } = req.user;

        try {
            const deleteAccount = await User.destroy({
                where: { id: id },
            });
            if (deleteAccount != 1) {
                return res
                    .status(400)
                    .json({ message: "Bad Request or Account isn't found" });
            }

            return res.status(200).json({
                message:
                    "Congrats, Account and Profile is deleted, See you again!",
            });
        } catch (error) {
            console.error(error);
            return res
                .status(500)
                .json({ message: `${error.message}, Bad Request!` });
        }
    }
}

module.exports = AccountController;
