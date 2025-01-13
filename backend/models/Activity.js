import { DataTypes } from "sequelize";
import sequelize from "../db.js";
import { DESCRIBE } from "sequelize/lib/query-types";

const Activity = sequelize.define("Activity", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default Activity;
