const { Profile } = require("../models");

class ProfileController {
    static async readProfile(req, res) {
        const { id } = req.user;

        try {
            if (!id) {
                return res
                    .status(404)
                    .json({ message: "ID is ot found, please try again" });
            }

            const findProfile = await Profile.findOne({ where: { id: id } });
            if (!findProfile) {
                return res
                    .status(404)
                    .json({ message: "User's profile isn't found. " });
            }

            return res.status(200).json(findProfile);
        } catch (error) {
            console.error(error);
            return res
                .status(500)
                .json({ message: `${error.message}, Bad Request!` });
        }
    }

    static async updateProfile(req, res) {
        const { id } = req.user;
        const { fullname, birthdate, region } = req.body;

        try {
            if (!id) {
                return res
                    .status(404)
                    .json({ message: "ID is not found, please try again" });
            }

            const payload_profile = {
                fullname: fullname,
                birthdate: birthdate,
                region: region,
                updatedAt: new Date(),
            };

            const updatedProfile = await Profile.update(payload_profile, {
                where: {
                    id: id,
                },
            });
            if (!updatedProfile) {
                return res
                    .status(400)
                    .json({ message: "Bad Request! Please try again." });
            }

            return res.status(200).json({
                message: `Congratulation ${fullname}!! Profile is updated`,
            });
        } catch (error) {
            console.error(error);
            return res
                .status(500)
                .json({ message: `${error.message}. Bad Request!` });
        }
    }
}

module.exports = ProfileController;
