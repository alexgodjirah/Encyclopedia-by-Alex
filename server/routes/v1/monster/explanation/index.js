const ExplanationController = require("../../../../controllers/monster/explanationController");

const explanation_route = require("express").Router();

explanation_route.get("/all", ExplanationController.readAllExplanation);
explanation_route.get("/:id", ExplanationController.readSelectedExplanation);

explanation_route.put(
    "/update/:id",
    ExplanationController.updateSelectedExplanation
);

module.exports = explanation_route;
