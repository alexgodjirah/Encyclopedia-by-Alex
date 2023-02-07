const AccountController = require("../../../../controllers/accountController");

const account_route = require("express").Router();

account_route.get("/", AccountController.readAccount, (req, res) => {
    console.log(res.body);
});

account_route.put("/update", AccountController.updateAccount, (req, res) => {
    console.log(res.body);
});

account_route.delete("/delete", AccountController.deleteAccount, (req, res) => {
    console.log(res.body);
});

module.exports = account_route;
