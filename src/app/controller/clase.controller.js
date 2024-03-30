const Clase = require("../models/clase.model");

const {
  handleResponse,
  handleNull,
  handleErrorResponse,
} = require("../utilities/functions");

exports.getClasses = async (req, res) => {
  try {
    handleResponse(res, 200, await Clase.findAll());
  } catch (err) {
    handleErrorResponse(500, err);
  }
};
exports.getClass = async (req, res) => {
  handleNull(
    res,
    await Clase.findOne({
      where: {
        idclase: req.params.id_class,
      },
    })
  );
};
exports.addClass = async (req, res) => {
  const data = ({ nombre_classe, descripcion_clase, creditos } = req.body);
  await handleCreateUpdate(res, data, Clase);
};
exports.updateClass = async (req, res) => {
  const data = ({ nombre_classe, descripcion_clase, creditos } = req.body);
  data["estado"] = 2;
  const { id_class } = req.params;
  await handleCreateUpdate(res, data, Clase, id_class);
};
exports.deleteClass = async (req, res) => {
  const data = { estado: 4 };
  const { id_class } = req.params;
  await handleCreateUpdate(res, data, Clase, id_class);
};
