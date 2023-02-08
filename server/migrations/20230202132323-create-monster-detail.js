"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("Monster_Details", {
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
            elements: {
                allowNull: false,
                type: Sequelize.ARRAY(Sequelize.STRING),
            },
            ailemnts: {
                allowNull: false,
                type: Sequelize.ARRAY(Sequelize.STRING),
            },
            weakness: {
                allowNull: false,
                type: Sequelize.ARRAY(Sequelize.STRING),
            },
            habitats: {
                allowNull: false,
                type: Sequelize.ARRAY(Sequelize.STRING),
            },
            size: {
                allowNull: false,
                type: Sequelize.ARRAY(Sequelize.INTEGER),
            },
            cousins: {
                allowNull: false,
                type: Sequelize.ARRAY(Sequelize.STRING),
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
        await queryInterface.dropTable("Monster_Details");
    },
};
