const {
    Class,
    Monster,
    Monster_Detail,
    Monster_Explanation,
    sequelize,
} = require("../../models");

class CreationController {
    static async createMonster(req, res) {
        const {
            english_name,
            japan_name,
            title,
            type,
            generation,
            form,
            threat_level,
        } = req.body;

        const {
            elements,
            ailments,
            weakness,
            habitats,
            size,
            related_monsters,
        } = req.body;

        const { physiology, behavior_and_abilities, description } = req.body;

        try {
            // Name Checker
            const isMonsterUnavailable = await Monster.findOne({
                where: { english_name: english_name },
            });
            if (isMonsterUnavailable) {
                return res
                    .status(400)
                    .json({ message: "Monster's name is already taken" });
            }

            const transaction = sequelize.transaction(async (t) => {
                const findClass = await Class.findOne({
                    where: { class: type },
                });
                if (!findClass) {
                    return res
                        .status(404)
                        .json({ message: "Class isn't found" });
                }

                // Monster Creation
                const payload_monster = {
                    english_name: english_name,
                    japan_name: japan_name,
                    title: title,
                    class_id: findClass.id,
                    generation: generation,
                    form: form,
                    threat_level: threat_level,
                };

                const createdMonster = await Monster.create(payload_monster, {
                    transaction: t,
                });
                if (!createdMonster) {
                    return res
                        .status(400)
                        .json({ message: "Bad Request! Please try again" });
                }

                // Monster Detail Creation
                const payload_monster_detail = {
                    monster_id: createdMonster.id,
                    elements: elements,
                    ailments: ailments,
                    weakness: weakness,
                    habitats: habitats,
                    size: size,
                    related_monsters: related_monsters,
                };

                const createdDetail = await Monster_Detail.create(
                    payload_monster_detail,
                    { transaction: t }
                );
                if (!createdDetail) {
                    return res
                        .status(400)
                        .json({ message: "Bad Request! Please try again" });
                }

                // Monster Explanation Creation
                const payload_monster_explanation = {
                    monster_id: createdMonster.id,
                    physiology: physiology,
                    behavior_and_abilities: behavior_and_abilities,
                    description: description,
                };

                const createdExplanation = await Monster_Explanation.create(
                    payload_monster_explanation,
                    { transaction: t }
                );
                if (!createdExplanation) {
                    return res
                        .status(400)
                        .json({ message: "Bad Request! Please try again" });
                }

                return res.status(201).json({
                    message: "Congratulations! Monster is created",
                    Monster: createdMonster,
                    "Monster Detail": createdDetail,
                    "Monster Explanation": createdExplanation,
                });
            });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: error.message });
        }
    }
}

module.exports = CreationController;
