"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("Profiles", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            fullname: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            birthdate: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            region: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            user_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: { tableName: "Users" },
                    key: "id",
                    deferrable: Sequelize.Deferrable.INITIALLY_DEFERRED,
                },
                onDelete: "CASCADE",
                onUpdate: "CASCADE",
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
        await queryInterface.dropTable("Profiles");
    },
};
