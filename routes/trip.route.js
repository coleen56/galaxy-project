const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authJwt");

router.use(authMiddleware.verifyToken);

const controller = require("../controllers/trip.controller");

router.get("/", controller.findAll);
router.post("/", controller.create);
router.get("/:id", controller.findById);
router.post("/booking", controller.bookTrip)

module.exports = router;