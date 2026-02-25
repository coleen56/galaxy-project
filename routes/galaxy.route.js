const express = require('express');
const router = express.Router();
const authMiddleware = require("../middleware/authJwt");

router.use(authMiddleware.verifyToken);
const controller = require("../controllers/galaxy.controller")

router.get("/", controller.findAll);
router.get("/:id", controller.findById);
router.post("/", controller.create);
router.delete("/:id", controller.delete);

module.exports = router;