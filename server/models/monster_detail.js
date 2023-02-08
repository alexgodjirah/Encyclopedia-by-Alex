"use strict";
const { Model, Deferrable } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Monster_Detail extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Monster_Detail.belongsTo(models.Monster, {
                foreignKey: "monster_id",
                onDelete: "CASCADE",
            });
        }
    }
    Monster_Detail.init(
        {
            monster_id: {
                type: DataTypes.INTEGER,
                validate: {
                    notEmpty: true,
                },
                references: {
                    model: {
                        tableName: "Monster",
                    },
                    key: "id",
                    deferrable: Deferrable.INITIALLY_DEFERRED,
                },
            },
            elements: DataTypes.ARRAY(DataTypes.STRING),
            ailemnts: DataTypes.ARRAY(DataTypes.STRING),
            weakness: DataTypes.ARRAY(DataTypes.STRING),
            habitats: DataTypes.ARRAY(DataTypes.STRING),
            size: DataTypes.ARRAY(DataTypes.INTEGER),
            cousins: DataTypes.ARRAY(DataTypes.STRING),
        },
        {
            sequelize,
            modelName: "Monster_Detail",
        }
    );
    return Monster_Detail;
};
