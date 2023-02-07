const { User, Profile, sequelize } = require("../models");
const { hashPassword } = require("../helpers/passwordHandler");
const { generateToken } = require("../helpers/tokenHandler");

class RegisterController {
    static async registerUser(req, res) {
        const { username, email, password, fullname, birthdate, region } =
            req.body;

        try {
            // Username checker
            const isUsernameAvailable = await User.findOne({
                where: { username: username },
            });
            if (isUsernameAvailable) {
                return res
                    .status(400)
                    .json({ message: "Username is already taken!" });
            }

            // Email checker
            const isEmailAvailable = await User.findOne({
                where: { email: email },
            });
            if (isEmailAvailable) {
                return res
                    .status(400)
                    .json({ message: "Email is already taken!" });
            }

            const transaction = sequelize.transaction(async (t) => {
                // User creation
                const payload_user = {
                    username: username,
                    email: email,
                    password: hashPassword(password),
                    role: "user",
                };

                const createdUser = await User.create(payload_user, {
                    transaction: t,
                });
                if (!createdUser) {
                    return res
                        .status(400)
                        .json({ message: "Bad Request! Please try again" });
                }

                // Profile Creation
                const payload_profile = {
                    fullname: fullname,
                    birthdate: birthdate,
                    region: region,
                    user_id: createdUser.id,
                };

                const createdProfile = await Profile.create(payload_profile, {
                    transaction: t,
                });
                if (!createdProfile) {
                    return res
                        .status(400)
                        .json({ message: "Bad Request! Please try again" });
                }

                // Generate Access Token
                const payload_access_token = {
                    id: createdUser.id,
                    username: createdUser.username,
                    email: createdUser.email,
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

                return res.status(201).json({
                    message: "Congrats, user's account is created",
                    username: createdUser.username,
                    email: createdUser.email,
                    "access token": access_token,
                });
            });
        } catch (error) {
            console.error(error);
            return res
                .status(500)
                .json({ message: `${error.message}. Please try again!` });
        }
    }
}

module.exports = RegisterController;
