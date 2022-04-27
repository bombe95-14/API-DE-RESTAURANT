const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();
const app = express();

const PlatsRoute = require("./routes/plat");
const MenusRoute = require("./routes/menu");
const CommandesRoute = require("./routes/commande");
const BoissonsRoute = require("./routes/boisson");
const UsersRoute = require("./routes/user");

mongoose
  .connect(process.env.dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB connected!"))
  .catch(() => console.log("Failed to coonnectDB!"));

app.use(express.json());

app.use("/api/plat", PlatsRoute);
app.use("/api/menu", MenusRoute);
app.use("/api/commande", CommandesRoute);
app.use("/api/boisson", BoissonsRoute);
app.use("/api/user", UsersRoute);

app.use("*", () => {
  console.log("il n'existe pas de api pour ce end point.");
});

port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`listening to port ${port} `);
});
module.exports = app;
