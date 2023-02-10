"use strict";
const { Model, Deferrable } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Monster_Explanation extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Monster_Explanation.belongsTo(models.Monster, {
                foreignKey: "monster_id",
                onDelete: "CASCADE",
            });
        }
    }
    Monster_Explanation.init(
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
            physiology: DataTypes.STRING(2000),
            behavior_and_abilities: DataTypes.STRING(2000),
            description: DataTypes.STRING(2000),
        },
        {
            sequelize,
            modelName: "Monster_Explanation",
        }
    );
    return Monster_Explanation;
};
