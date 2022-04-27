const User = require("../models/user");
const auth = require("../middleware/auth");

const bcrypt = require("bcrypt");

exports.createUser = async (req, res, next) => {
  try {
    const hash = await bcrypt.hash(req.body.password, 10);
    const newUser = new User(req.body);
    newUser.password = hash;
    const user = await newUser.save();
    if (!user) {
      return res.status(400).send("Unable to create new user");
    }
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).send(error);
  }
};

exports.Login = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res
        .status(404)
        .send("Aucun utilisateur pour email passé en parametre");
    }
    const match = await bcrypt.compare(req.body.password, user.password);
    if (!match) {
      return res.status(401).send("Validation credentials does not match");
    }
    const token = auth.generateToken(user._id);
    return res.status(200).json({ accessToken: token });
  } catch (error) {
    return res.status(500).send(error);
  }
};
