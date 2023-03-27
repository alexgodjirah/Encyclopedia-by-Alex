"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("Monsters", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            english_name: {
                allowNull: false,
                type: Sequelize.STRING,
            },
            japan_name: {
                allowNull: false,
                type: Sequelize.STRING,
            },
            title: {
                allowNull: false,
                type: Sequelize.ARRAY(Sequelize.STRING),
            },
            class_id: {
                allowNull: false,
                type: Sequelize.INTEGER,
                references: {
                    model: {
                        tableName: "Classes",
                    },
                    key: "id",
                    deferrable: Sequelize.Deferrable.INITIALLY_DEFERRED,
                },
            },
            generation: {
                allowNull: false,
                type: Sequelize.INTEGER,
            },
            form: {
                allowNull: false,
                type: Sequelize.ENUM,
                values: ["Base", "Subspecies", "Rare Species", "Deviant"],
            },
            threat_level: {
                allowNull: false,
                type: Sequelize.INTEGER,
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
        await queryInterface.dropTable("Monsters");
    },
};
