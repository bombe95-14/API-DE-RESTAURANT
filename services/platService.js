const Plat = require("../models/plat");

exports.CreatePlat = async (req, res) => {
  try {
    const plat = new Plat(req.body);
    plat.useId = req.userId;
    const saved = await plat.save();
    if (!saved) {
      return res.status(500).send("plat non crée une erreur c'est produite");
    }
    return res.status(200).json(plat);
  } catch (error) {
    return res.status(500).send(error);
  }
};

exports.AllPlats = async (req, res) => {
  try {
    const plats = await Plat.find();
    if (!plats) {
      return res.status(400).send("Pas de plats existant.");
    }
    return res.status(200).json(plats);
  } catch (error) {
    res.send(error);
  }
};

exports.OneplatbyId = async (req, res) => {
  try {
    const plat = await Plat.findOne({ _id: req.params.id });
    if (!plat) {
      return res.status(404).send("Ce plat n'existe pas");
    }
    return res.status(200).json(plat);
  } catch (error) {
    return res.send(error);
  }
};
exports.updatePlat = async (req, res) => {
  try {
    const update = req.body;
    const updatPlat = Plat.updateOne({ _id: req.params.id }, update);
    if (!updatPlat) {
      return res.status(500).send("Mise a jour non effectuer");
    }
    return res.status(200).json(updatPlat);
  } catch (error) {
    return res.status(500).send(error);
  }
};

exports.deletePlatById = async (req, res) => {
  try {
    const del = await Plat.findOneAndDelete({ _id: req.params.id });
    if (!del) {
      return res.status(500).send("Plat non supprimé");
    }
    return res.status(200).json(del);
  } catch (error) {
    return res.send(error);
  }
};
