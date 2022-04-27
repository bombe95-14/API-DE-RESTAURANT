const express = require("express");

const BoissonService = require("../services/boissonService");
const router = express.Router();

router
  .get("/", BoissonService.AllBoissons)
  .get("/:id", BoissonService.OneBoissonbyId)
  .post("/create", BoissonService.CreateBoisson)
  .patch("/update/:id", BoissonService.updateBoisson)
  .delete("/delete/:id", BoissonService.deleteBoissonById);

module.exports = router;
