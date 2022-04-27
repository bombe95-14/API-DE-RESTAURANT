const Boisson = require("../models/boisson");

exports.CreateBoisson = async (req, res) => {
  try {
    const boi = new Boisson(req.body);
    const saved = await Boisson.save();
    if (!saved) {
      return res.status(500).send("Boisson non crée une erreur c'est produite");
    }
    return res.status(200).json(boi);
  } catch (error) {
    return res.status(500).send(error);
  }
};

exports.AllBoissons = async (req, res) => {
  try {
    const boi = await Boisson.find();
    if (!boi) {
      return res.status(400).send("Pas de Boisson existant.");
    }
    return res.status(200).json(boi);
  } catch (error) {
    res.send(error);
  }
};

exports.OneBoissonbyId = async (req, res) => {
  try {
    const boi = await Boisson.findOne({ _id: req.params._id });
    if (!boi) {
      return res.status(400).send("Ce plat n'existe pas");
    }
    return res.status(200).json(boi);
  } catch (error) {
    return res.send(error);
  }
};
exports.updateBoisson = async (req, res) => {
  try {
    const updatBoi = Boisson.findOneAndUpdate({ _id: req.params.id }, req.body);
    if (!updatBoi) {
      return res.status(500).send("Mise a jour non effectuer");
    }
    return res.status(200).json(updatBoi);
  } catch (error) {
    return res.send(error);
  }
};

exports.deleteBoissonById = async (req, res) => {
  try {
    const del = await Boisson.findOneAndDelete({ _id: req.params.id });
    if (!del) {
      return res.status(500).send("Boisson non supprimé");
    }
    return res.status(200).json(del);
  } catch (error) {
    return res.send(error);
  }
};
