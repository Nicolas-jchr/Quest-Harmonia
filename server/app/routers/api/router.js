const express = require("express");

const router = express.Router();

// For sayActions

const { sayWelcome } = require("../../controllers/sayActions");

router.get("/", sayWelcome);

const itemsRouter = require("./items/router");

router.use("/items", itemsRouter);

// For programActions

const { browse } = require("../../controllers/programActions");

router.get("/", browse);

module.exports = router;