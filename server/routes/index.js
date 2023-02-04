const v1 = require("./v1");

const route = require("express").Router();

route.use("/v1", v1);

route.get("/", (req, res) => {
    res.send("hello from route");
});

module.exports = route;
