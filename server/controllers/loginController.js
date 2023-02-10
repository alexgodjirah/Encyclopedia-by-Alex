const { User } = require("../models");
const { verifyPassword } = require("../helpers/passwordHandler");
const { generateToken } = require("../helpers/tokenHandler");

class LoginController {
    static async loginUser(req, res) {
        const { username, email, password } = req.body;

        try {
            // Username User
            if (username && !email) {
                try {
                    const findUser = await User.findOne({
                        where: { username: username },
                    });
                    if (!findUser) {
                        return res
                            .status(400)
                            .json({ message: "User isn't found" });
                    }

                    // Password Checker
                    const isPasswordMatch = await verifyPassword(
                        password,
                        findUser.password
                    );
                    if (!isPasswordMatch) {
                        return res.status(400).json({
                            message:
                                "Password is wrong, please enter the correct one!",
                        });
                    }

                    // Generate Access Token
                    const payload_access_token = {
                        id: findUser.id,
                        username: findUser.username,
                        email: findUser.email,
                        role: findUser.role,
                    };

                    const access_token = await generateToken(
                        payload_access_token
                    );
                    if (!access_token) {
                        return res
                            .status(400)
                            .json({ message: "Bad Request! Please try again" });
                    }

                    res.cookie("access_token", access_token, {
                        httpOnly: true,
                    });

                    return res.status(200).json({
                        message: `Congrats! Login is success. Welcome ${findUser.username}`,
                        "access token": access_token,
                    });
                } catch (error) {
                    console.error(error);
                    return res.status(500).json({ message: error.message });
                }

                // Email User
            } else if (!username && email) {
                try {
                    const findUser = await User.findOne({
                        where: { email: email },
                    });
                    if (!findUser) {
                        return res
                            .status(400)
                            .json({ message: "User isn't found" });
                    }

                    const isPasswordMatch = await verifyPassword(
                        password,
                        findUser.password
                    );
                    if (!isPasswordMatch) {
                        return res.status(400).json({
                            message:
                                "Password is wrong, please enter the correct one!",
                        });
                    }

                    // Generate Access Token
                    const payload_access_token = {
                        id: findUser.id,
                        username: findUser.username,
                        email: findUser.email,
                    };

                    const access_token = await generateToken(
                        payload_access_token
                    );
                    if (!access_token) {
                        return res
                            .status(400)
                            .json({ message: "Bad Request! Please try again" });
                    }

                    res.cookie("access_token", access_token, {
                        httpOnly: true,
                    });

                    return res.status(200).json({
                        message: `Congrats! Login is success. Welcome ${findUser.username}`,
                        "access token": access_token,
                    });
                } catch (error) {
                    console.error(error);
                    return res.status(500).json({ message: error.message });
                }
            }
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: error.message });
        }
    }
}

module.exports = LoginController;
