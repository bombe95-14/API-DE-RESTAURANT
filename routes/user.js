const User = require("../services/user");

const express = require("express");
const router = express.Router();

router.post("/login", User.Login).post("/create", User.createUser);

module.exports = router;
