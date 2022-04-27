const express = require("express");
const auth = require("../middleware/auth");

const PlatService = require("../services/platService");
const router = express.Router();

router
  .get("/", PlatService.AllPlats)
  .get("/:id", PlatService.OneplatbyId)
  .post("/create", auth.verifyToken, PlatService.CreatePlat)
  .patch("/update/:id", auth.verifyToken, PlatService.updatePlat)
  .delete("/delete/:id", auth.verifyToken, PlatService.deletePlatById);

module.exports = router;
