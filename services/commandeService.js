const Commande = require("../models/commande");

exports.CreateCommande = async (req, res) => {
  try {
    const comm = new Commande(req.body);
    const saved = await comm.save();
    if (!saved) {
      return res
        .status(500)
        .send("commande non crée une erreur c'est produite");
    }
    return res.status(200).json(comm);
  } catch (error) {
    return res.status(500).send(error);
  }
};

exports.AllCommandes = async (req, res) => {
  try {
    const comm = await Commande.find();
    if (!comm) {
      return res.status(400).send("Pas de commandes existant.");
    }
    return res.status(200).json(comm);
  } catch (error) {
    res.send(error);
  }
};

exports.OneCommandebyId = async (req, res) => {
  try {
    const comm = await Commande.findOne({ _id: req.params.id });
    if (!comm) {
      return res.status(400).send("Cette commande n'existe pas");
    }
    return res.status(200).json(comm);
  } catch (error) {
    return res.send(error);
  }
};
exports.updateCommande = async (req, res) => {
  try {
    const updatComm = Commande.findOneAndUpdate(
      { _id: req.params.id },
      req.body
    );
    if (!updatComm) {
      return res.status(500).send("Mise a jour non effectuer");
    }
    return res.status(200).json(updatComm);
  } catch (error) {
    return res.status(500).send(error);
  }
};

exports.deleteCommandeById = async (req, res) => {
  try {
    const del = await Commande.findOneAndDelete({ _id: req.params.id });
    if (!del) {
      return res.status(500).send("Commande non supprimé");
    }
    return res.status(200).json(del);
  } catch (error) {
    return res.send(error);
  }
};
