const express = require("express");

const router = express.Router();

const { sayWelcome } = require("../../controllers/sayActions");

router.get("/", sayWelcome);

// For Programs

const programsRouter = require("./programs/router");

router.use("/programs", programsRouter);

const itemsRouter = require("./items/router");

router.use("/items", itemsRouter);


module.exports = router;