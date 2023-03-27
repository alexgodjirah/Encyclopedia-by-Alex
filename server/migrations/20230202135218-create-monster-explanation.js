"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("Monster_Explanations", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            monster_id: {
                allowNull: false,
                type: Sequelize.INTEGER,
                references: {
                    model: {
                        tableName: "Monsters",
                    },
                    key: "id",
                    deferrable: Sequelize.Deferrable.INITIALLY_DEFERRED,
                },
                onDelete: "CASCADE",
                onUpdate: "CASCADE",
            },
            physiology: {
                allowNull: false,
                type: Sequelize.STRING(2000),
            },
            behavior_and_abilities: {
                allowNull: false,
                type: Sequelize.STRING(2000),
            },
            description: {
                allowNull: false,
                type: Sequelize.STRING(2000),
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("Monster_Explanations");
    },
};
