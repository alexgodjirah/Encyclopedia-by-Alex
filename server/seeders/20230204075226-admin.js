"use strict";

const { hashPassword } = require("../helpers/passwordHandler");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert("Users", [
            {
                id: 1,
                username: "admin",
                email: "admin@admin.com",
                password: hashPassword("admin1"),
                role: "admin",
                createdAt: new Date().toLocaleString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                }),
                updatedAt: new Date().toLocaleString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                }),
            },
        ]);
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete("Users", {}, null);
    },
};
