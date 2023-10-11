const { loginUser, registerUser } = require("../controllers/user.controller");
const { runValidation } = require("../middleware");
const { schemas } = require("../middleware/schema");

const router = require("express").Router();

router.post("/register", runValidation(schemas.registerSchema), registerUser);

router.post("/login", runValidation(schemas.loginSchema), loginUser);

module.exports = router;
