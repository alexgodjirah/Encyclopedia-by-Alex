"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        /**
         * Add seed commands here.
         *
         * Example:
         * await queryInterface.bulkInsert('People', [{
         *   name: 'John Doe',
         *   isBetaMember: false
         * }], {});
         */
        const classes = [
            "Herbivore",
            "Fish",
            "Wingdrake",
            "Neopteron",
            "Temnoceran",
            "Bird Wyvern",
            "Flying Wyvern",
            "Piscine Wyvern",
            "Carapaceon",
            "Amphibian",
            "Fanged Beast",
            "Leviathan",
            "Snake Wyvern",
            "Brute Wyvern",
            "Fanged Wyvern",
            "Elder Dragon",
            "Unknown",
        ];
        const class_records = classes.map((c) => {
            return {
                id: classes.indexOf(c) + 1,
                class: c,
                createdAt: new Date(),
                updatedAt: new Date(),
            };
        });
        await queryInterface.bulkInsert("Classes", class_records, {});
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        await queryInterface.bulkDelete("Classes", null, {});
    },
};
