const express = require("express");

const CommandeService = require("../services/commandeService");
const router = express.Router();

router
  .get("/", CommandeService.AllCommandes)
  .get("/:id", CommandeService.OneCommandebyId)
  .post("/create", CommandeService.CreateCommande)
  .patch("/update/:id", CommandeService.updateCommande)
  .delete("/delete/:id", CommandeService.deleteCommandeById);

module.exports = router;
