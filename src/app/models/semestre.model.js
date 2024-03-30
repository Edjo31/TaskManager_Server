const sequelize = require("../config/sequelizeConect");
const { DataTypes, Model } = require("sequelize");

class Semester extends Model {}

Semester.init(
  {
    idsemestre: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    semestre: {
      type: DataTypes.STRING,
      allowNullL: false,
    },
    fecha_inicio: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    fecha_final: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    periodo_academico: {
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
    tableName: "semestre",
    timestamps: false,
  }
);

module.exports = Semester;
