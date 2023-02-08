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
                type: Sequelize.STRING,
            },
            abilities: {
                allowNull: false,
                type: Sequelize.STRING,
            },
            behavior: {
                allowNull: false,
                type: Sequelize.STRING,
            },
            habitat: {
                allowNull: false,
                type: Sequelize.STRING,
            },
            description: {
                allowNull: false,
                type: Sequelize.STRING,
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
