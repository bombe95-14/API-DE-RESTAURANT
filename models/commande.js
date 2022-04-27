const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const commandeSchema = new Schema({
  plats: [
    {
      type: ObjectId,
      ref: "plat",
    },
  ],
  jourDeLivraison: String,
  heureDelivraison: String,
  lieuDeLivraison: String,
  numeroClient: String,
});

module.exports = mongoose.model("Commandes", commandeSchema);
