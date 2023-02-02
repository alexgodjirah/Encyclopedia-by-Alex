require("dotenv").config();

const express = require("express");
const App = express();

const PORT = process.env.PORT || 4000;

App.use(express.urlencoded({ extended: true }));
App.use(express.json());

App.use("/", (req, res) => {
    res.send("hello world");
});

App.listen(PORT, () => {
    console.log(`Listening on Port: http://localhost:${PORT}`);
});
