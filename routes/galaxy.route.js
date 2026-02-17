const express = require('express');
const router = express.Router();
const controller = require("../controllers/galaxy.controller")

router.get("/", controller.findAll);
router.get("/:id", controller.findById);

module.exports = router;