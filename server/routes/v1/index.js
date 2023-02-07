const monster_route = require("./monster");
const user_route = require("./user");

const v1 = require("express").Router();
v1.use("/monster", monster_route);
v1.use("/user", user_route);

v1.get("/", (req, res) => {
    res.send("hello from v1");
});

module.exports = v1;
