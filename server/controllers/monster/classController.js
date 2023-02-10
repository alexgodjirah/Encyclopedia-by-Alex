const { Class } = require("../../models");

class ClassController {
    static async readAllClass(req, res) {
        try {
            const allClasses = await Class.findAll({
                order: [["class", "ASC"]],
            });

            if (!allClasses.length) {
                return res.status(404).json({
                    message: "There are no classes, please enter a new one",
                });
            }

            return res.status(200).json(allClasses);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: error.message });
        }
    }

    static async readSelectedClass(req, res) {
        const { type } = req.body;

        try {
            if (!type) {
                return res
                    .status(400)
                    .json({ message: "Please insert the class" });
            }

            const findClass = await Class.findOne({
                where: { class: type },
            });
            if (!findClass) {
                return res.status(404).json({
                    message:
                        "Class isn't found, please insert other class or create new one",
                });
            }

            return res
                .status(200)
                .json({ message: "Success", class: findClass });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: error.message });
        }
    }

    static async createClass(req, res) {
        const { type } = req.body;

        try {
            if (!type) {
                return res
                    .status(400)
                    .json({ message: "Please insert the class" });
            }
            const [newType, createdType] = await Class.findOrCreate({
                where: { class: type },
                defaults: {
                    class: type,
                },
            });

            console.log("creating:", newType.class);

            if (!createdType) {
                return res.status(409).json({
                    message: "Class is already created",
                    class: newType.type,
                });
            }

            if (!newType) {
                return res
                    .status(400)
                    .json({ message: "Bad Request! Please try again." });
            }

            return res
                .status(201)
                .json({ message: "Class is created", class: newType.type });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: error.message });
        }
    }

    static async updateClass(req, res) {
        const { id } = req.params;
        const { type } = req.body;

        try {
            if (!id)
                return res.status(404).json({ message: "ID isn't available" });

            if (!type)
                return res
                    .status(400)
                    .json({ message: "Please insert the updated class" });

            const updatedClass = await Class.update(
                { class: type },
                {
                    where: { id: id },
                }
            );

            if (!updatedClass) {
                return (
                    res.status(400),
                    json({ message: "Bad Request! Please try again" })
                );
            }

            return res
                .status(200)
                .json({ message: `Class has been updated`, class: type });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: error.message });
        }
    }

    static async deleteClass(req, res) {
        const { id } = req.params;

        try {
            if (!id) {
                return res.status(404).json({ message: "ID isn't available" });
            }
            const deleteClass = await Class.destroy({
                where: { id: id },
            });

            if (deleteClass != 1) {
                return res.status(400).json({
                    message: "Bad Request or monster class isn't found",
                });
            }

            return res
                .status(200)
                .json({ message: "Congrats, monster class is deleted" });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: error.message });
        }
    }
}

module.exports = ClassController;
