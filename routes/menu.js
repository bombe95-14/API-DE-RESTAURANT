const express = require("express");

const MenuService = require("../services/menuService");
const router = express.Router();

router
  .get("/", MenuService.AllMenus)
  .get("/:id", MenuService.OneMenubyId)
  .post("/create", MenuService.CreateMenu)
  .patch("/update/:id", MenuService.updateMenu)
  .delete("/delete/:id", MenuService.deleteMenuById);

module.exports = router;
