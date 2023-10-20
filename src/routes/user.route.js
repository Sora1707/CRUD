const express = require("express");
const router = express.Router();
const userController = require("../app/controllers/UserController");

// path: /users
router.get("/", userController.get);
router.get("/create", userController.create);
router.get("/:id", userController.getById);
router.post("/create", userController.post);
router.patch("/:id", userController.patch);
router.delete("/:id", userController.delete);

module.exports = router;
