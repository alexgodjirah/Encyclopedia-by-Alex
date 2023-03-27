const LoginController = require("../../../controllers/loginController");
const RegisterController = require("../../../controllers/registerController");
const authentication = require("../../../middlewares/authentication");

const user_route = require("express").Router();

const account_route = require("./account");
const profile_route = require("./profile");

user_route.get("/", (req, res) => {
    res.send("hello, this is from user ");
});

user_route.post(
    "/registration",
    RegisterController.registerUser,
    (req, res) => {
        console.log(res.body);
    }
);
user_route.post("/login", LoginController.loginUser, (req, res) => {
    console.log(res.body);
});

user_route.use(authentication);
user_route.use("/account", account_route);
user_route.use("/profile", profile_route);

module.exports = user_route;
