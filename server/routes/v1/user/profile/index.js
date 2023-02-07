const ProfileController = require("../../../../controllers/profileController");

const profile_route = require("express").Router();

profile_route.get("/", ProfileController.readProfile, (req, res) => {
    console.log(res.body);
});

profile_route.put("/update", ProfileController.updateProfile, (req, res) => {
    console.log(res.body);
});

module.exports = profile_route;
