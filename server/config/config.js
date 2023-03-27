require("dotenv").config();

module.exports = {
    development: {
        username: process.env.DB_username,
        password: process.env.DB_password,
        database: "encyclopedia_alex",
        host: "127.0.0.1",
        dialect: "postgres",
        dialectOptions: {
            client_encoding: "UTF8",
        },
    },
};
