const DetailController = require("../../../../controllers/monster/detailController");

const detail_route = require("express").Router();

detail_route.get("/all", DetailController.readAllDetail);
detail_route.get("/:id", DetailController.readSelectedDetail);

detail_route.put("/update/:id", DetailController.updateSelectedDetail);

module.exports = detail_route;
