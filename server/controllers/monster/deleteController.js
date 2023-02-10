const {
    Class,
    Monster,
    Monster_Detail,
    Monster_Explanation,
    sequelize,
} = require("../../models");

class DeleteController {
    static async deleteMonster(req, res) {
        const { id } = req.params;

        try {
            const transaction = sequelize.transaction(async (t) => {
                const deletedMonster = await Monster.destroy({
                    where: { id: id },
                });

                if (deletedMonster != 1) {
                    return res.status(400).json({ message: "Bad request" });
                }

                return res
                    .status(200)
                    .json({ message: "Congrats, monster is deleted" });
            });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: error.message });
        }
    }
}

module.exports = DeleteController;
