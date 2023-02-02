const v1 = require("express").Router();

v1.get("/", (req, res) => {
    res.send("hello from v1");
});

module.exports = v1;
