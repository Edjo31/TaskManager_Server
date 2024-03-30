const sequelize = require("../config/sequelizeConect");
const { DataTypes, Model } = require("sequelize");

class Clase extends Model {}

Clase.init(
  {
    idclase: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    nombre_classe: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    descripcion_clase: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    creditos: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    estado: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "clase",
    timestamps: false,
  }
);

module.exports=Clase