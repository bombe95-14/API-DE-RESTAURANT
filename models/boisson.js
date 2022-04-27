const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const boissonSchema = new Schema({
  libelle: String,
  prix: Number,
  categorie: {
    type: String,
    enum: ["jus naturel", "vin", "biere"],
    required: true,
  },
});

module.exports = mongoose.model("Boissons", boissonSchema);
