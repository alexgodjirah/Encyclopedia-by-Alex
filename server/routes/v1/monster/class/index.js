const ClassController = require("../../../../controllers/monster/classController");
const authorization = require("../../../../middlewares/authorization");

const class_route = require("express").Router();

class_route.get("/list", ClassController.readAllClass);
class_route.get("/search", ClassController.readSelectedClass);

class_route.use(authorization);
class_route.post("/create", ClassController.createClass);
class_route.put("/update/:id", ClassController.updateClass);
class_route.delete("/delete/:id", ClassController.deleteClass);

module.exports = class_route;
