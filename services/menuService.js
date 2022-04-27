const Menu = require("../models/menu");

exports.CreateMenu = async (req, res) => {
  try {
    const menu = new Menu(req.body);
    const saved = await Menu.save();
    if (!saved) {
      return res.status(500).send("Menu non crée une erreur c'est produite");
    }
    return res.status(200).json(menu);
  } catch (error) {
    return res.status(500).send(error);
  }
};

exports.AllMenus = async (req, res) => {
  try {
    const menu = await Menu.find();
    if (!menu) {
      return res.status(400).send("Pas de menu existant.");
    }
    return res.status(200).json(menu);
  } catch (error) {
    res.send(error);
  }
};

exports.OneMenubyId = async (req, res) => {
  try {
    const menu = await Menu.findOne({ _id: req.params._id });
    if (!menu) {
      return res.status(400).send("Ce menu n'existe pas");
    }
    return res.status(200).json(menu);
  } catch (error) {
    return res.send(error);
  }
};
exports.updateMenu = async (req, res) => {
  try {
    const updatMenu = Menu.findOneAndUpdate({ _id: req.params.id }, req.body);
    if (!updatMenu) {
      return res.status(500).send("Mise a jour non effectuer");
    }
    return res.status(200).json(updatMenu);
  } catch (error) {
    return res.send(error);
  }
};

exports.deleteMenuById = async (req, res) => {
  try {
    const del = await Menu.findOneAndDelete({ _id: req.params.id });
    if (!del) {
      return res.status(500).send("Plat non supprimé");
    }
    return res.status(200).json(del);
  } catch (error) {
    return res.send(error);
  }
};
