const { Class, Monster } = require("../../models");

class MonsterController {
    static async readAllMonsters(req, res) {
        try {
            const allMonsters = await Monster.findAll({
                order: [["id", "ASC"]],
            });

            if (!allMonsters.length) {
                return res.status(404).json({
                    message: "There are no monsters, please insert a new one",
                });
            }

            return res.status(200).json(allMonsters);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: error.message });
        }
    }

    static async readSelectedMonsters(req, res) {
        const { monster } = req.body;

        try {
            if (!monster) {
                return res
                    .status(400)
                    .json({ message: "Please insert the monster" });
            }

            const findMonster = await Monster.findOne({
                where: { english_name: monster },
            });
            if (!findMonster) {
                return res.status(404).json({
                    message:
                        "Monster isn't found, please insert other monster or create new one",
                });
            }

            return res.status(200).json(findMonster);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: error.message });
        }
    }

    static async updateSelectedMonster(req, res) {
        const { id } = req.params;
        const {
            english_name,
            japan_name,
            title,
            type,
            generation,
            form,
            threat_level,
        } = req.body;

        try {
            const findMonster = await Monster.findByPk(id);
            if (!findMonster) {
                return res.status(404).json({ message: "Monster isn't found" });
            }

            const findClass = await Class.findOne({ where: { class: type } });
            if (!findClass) {
                return res.status(404).json({ message: "Class isn't found" });
            }

            const payload_monster = {
                english_name: english_name,
                japan_name: japan_name,
                title: title,
                class_id: findClass.id,
                generation: generation,
                form: form,
                threat_level: threat_level,
            };

            const updatedMonster = await Monster.update(payload_monster, {
                where: { english_name: findMonster.english_name },
            });
            if (!updatedMonster) {
                return res
                    .status(400)
                    .json({ message: "Bad request, please try again" });
            }

            return res.status(201).json({
                message: `Monster's information is updated`,
            });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: error.message });
        }
    }
}

module.exports = MonsterController;
