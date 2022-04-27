const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
  },
  password: String,
  nom: String,
  age: Number,
  contact: String,
});
userSchema.plugin(uniqueValidator);
module.exports = mongoose.model("User", userSchema);
