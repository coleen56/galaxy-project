const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authJwt");

router.use(authMiddleware.verifyToken);

const { authJwt } = require("../middleware");
const controller = require("../controllers/user.controller");

router.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Origin",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

router.get("/all", controller.allAccess);

router.get("/user",
        [authJwt.verifyToken],
        controller.userBoard
    );

router.get("/mod",
        [authJwt.verifyToken, authJwt.isModerator],
        controller.moderatorBoard
    );

router.get("/admin",
        [authJwt.verifyToken, authJwt.isAdmin],
        controller.adminBoard
    );

module.exports = router;