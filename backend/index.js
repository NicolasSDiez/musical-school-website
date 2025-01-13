import { Sequelize } from "./db.js";
import Activity from "./models/Activity.js";

sequelize
  .sync({ force: true })
  .then(async () => {
    console.log("Base de datos sincronizada");
  })
  .catch((error) => {
    console.log("Error al sincronizar la base de datos", error);
  });
