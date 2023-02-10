const {
    Class,
    Monster,
    Monster_Detail,
    Monster_Explanation,
    sequelize,
} = require("../../models");

class ExplanationController {
    static async readAllExplanation(req, res) {
        try {
            const allExplanation = await Monster_Explanation.findAll({
                order: [["id", "ASC"]],
            });

            if (!allExplanation.length) {
                return res
                    .status(404)
                    .json({ message: "Explanation isn't found" });
            }

            return res.status(200).json(allExplanation);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: error.message });
        }
    }

    static async readSelectedExplanation(req, res) {
        const { id } = req.params;

        try {
            const findExplanation = await Monster_Explanation.findOne({
                where: { monster_id: id },
            });

            if (!findExplanation) {
                return res
                    .status(404)
                    .json({ message: "Monster's explanation isn't found" });
            }

            return res.status(200).json(findExplanation);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: error.message });
        }
    }

    static async updateSelectedExplanation(req, res) {
        const { id } = req.params;
        const { physiology, behavior_and_abilities, description } = req.body;

        try {
            const findExplanation = await Monster_Explanation.findOne({
                where: { monster_id: id },
            });
            if (!findExplanation) {
                return res
                    .status(404)
                    .json({ message: "Explanation isn't found" });
            }

            const payload_explanation = {
                physiology: physiology,
                behavior_and_abilities: behavior_and_abilities,
                description: description,
            };

            const updatedExplanation = await Monster_Explanation.update(
                payload_explanation,
                {
                    where: { id: findExplanation.id },
                }
            );
            if (!updatedExplanation) {
                return res.status(400).json({ message: "Bad request" });
            }

            return res
                .status(200)
                .json({ message: "Monster's explanation is updated" });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: error.message });
        }
    }
}

module.exports = ExplanationController;
