"use strict";
const { Model, Deferrable } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Monster extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here\
            Monster.hasOne(models.Monster_Detail, {
                foreignKey: "monster_id",
                onDelete: "CASCADE",
            });

            Monster.hasOne(models.Monster_Explanation, {
                foreignKey: "monster_id",
                onDelete: "CASCADE",
            });

            Monster.belongsTo(models.Class, {
                foreignKey: "class_id",
            });
        }
    }
    Monster.init(
        {
            english_name: DataTypes.STRING,
            japan_name: DataTypes.STRING,
            title: DataTypes.ARRAY(DataTypes.STRING),
            class_id: {
                type: DataTypes.INTEGER,
                validate: {
                    notEmpty: true,
                },
                references: {
                    model: {
                        tableName: "Classes",
                    },
                    key: "id",
                    deferrable: Deferrable.INITIALLY_DEFERRED,
                },
            },
            generation: DataTypes.INTEGER,
            form: {
                type: DataTypes.ENUM,
                values: ["Base", "Subspecies", "Rare Species", "Deviant"],
            },
            threat_level: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: "Monster",
        }
    );
    return Monster;
};
