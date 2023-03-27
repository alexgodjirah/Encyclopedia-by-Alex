require("dotenv").config();

const cookieParser = require("cookie-parser");
const express = require("express");

const App = express();
const route = require("./routes");

const PORT = process.env.PORT || 4000;

App.use(express.urlencoded({ extended: true }));
App.use(express.json());
App.use(cookieParser());

App.use("/", route);

App.listen(PORT, () => {
    console.log(`Listening on Port: http://localhost:${PORT}`);
});
