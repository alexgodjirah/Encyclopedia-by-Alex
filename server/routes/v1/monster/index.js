const monster_route = require("express").Router();

const CreationController = require("../../../controllers/monster/creationController");
const DeleteController = require("../../../controllers/monster/deleteController");
const MonsterController = require("../../../controllers/monster/monsterController");
const class_route = require("./class");
const detail_route = require("./detail");
const explanation_route = require("./explanation");

monster_route.get("/all", MonsterController.readAllMonsters);
monster_route.get("/search", MonsterController.readSelectedMonsters);

monster_route.post("/create", CreationController.createMonster);
monster_route.put("/update/:id", MonsterController.updateSelectedMonster);
monster_route.delete("/delete/:id", DeleteController.deleteMonster);

monster_route.use("/class", class_route);
monster_route.use("/detail", detail_route);
monster_route.use("/explanation", explanation_route);

module.exports = monster_route;
