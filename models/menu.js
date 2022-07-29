 const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const menuSchema = new Schema({
  plats: [{
    type: ObjectId,
    ref: "plat",
  }],
  boissons: {
    type: ObjectId,
    ref: "boisson",
  },
  dateDuMenu: String,
});

module.exports = mongoose.model("Menus", menuSchema);
