const jwt = require("jsonwebtoken");

const SECRET_KEY = process.env.SECRET_KEY;

exports.generateToken = (userId) => {
  return jwt.sign({ userId }, SECRET_KEY, {
    expiresIn: "2h",
  });
};

exports.verifyToken = async (req, res, next) => {
  const authHeader = req.headers["authorization"];
  if (!authHeader) {
    return res.status(401).send("No access token provided.");
  }
  const token = authHeader && authHeader.split(" ")[1];
  try {
    const valid = await jwt.verify(token, SECRET_KEY);
    req.userId = valid.userId;
    next();
    return;
  } catch (error) {
    return res.status(401).send(error.message);
  }
};
