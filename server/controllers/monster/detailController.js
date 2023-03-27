const {
    Class,
    Monster,
    Monster_Detail,
    Monster_Explanation,
    sequelize,
} = require("../../models");

class DetailController {
    static async readAllDetail(req, res) {
        try {
            const allDetail = await Monster_Detail.findAll({
                order: [["id", "ASC"]],
            });

            if (!allDetail.length) {
                return res.status(404).json({
                    message:
                        "There are no monster's detail, please insert a new one",
                });
            }
            return res.status(200).json(allDetail);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: error.message });
        }
    }

    static async readSelectedDetail(req, res) {
        const { id } = req.params;

        try {
            const findDetail = await Monster_Detail.findOne({
                where: { monster_id: id },
            });

            if (!findDetail) {
                return res
                    .status(404)
                    .json({ message: "Monster's detail isn't found" });
            }

            return res.status(200).json(findDetail);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: error.message });
        }
    }

    static async updateSelectedDetail(req, res) {
        const { id } = req.params;
        const {
            elements,
            ailments,
            weakness,
            habitats,
            size,
            related_monsters,
        } = req.body;

        try {
            const findDetail = await Monster_Detail.findOne({
                where: { monster_id: id },
            });
            if (!findDetail) {
                return res.status(404).json({ message: "Detail isn't found" });
            }

            const payload_detail = {
                elements: elements,
                ailments: ailments,
                weakness: weakness,
                habitats: habitats,
                size: size,
                related_monsters: related_monsters,
            };

            const updatedDetail = await Monster_Detail.update(payload_detail, {
                where: { id: findDetail.id },
            });
            if (!updatedDetail) {
                return res.status(400).json({ message: "Bad request" });
            }

            return res
                .status(200)
                .json({ message: "Monster's detail is updated" });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: error.message });
        }
    }
}

module.exports = DetailController;
