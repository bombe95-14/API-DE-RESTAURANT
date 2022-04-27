const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const platSchema = new Schema({
  prix: Number,
  possibiliteLivraison: Boolean,
  dateCreation: {
    type: String,
    default: Date.now,
  },
  userId: {
    type: ObjectId,
    ref: "user",
  },
});

module.exports = mongoose.model("Plats", platSchema);
