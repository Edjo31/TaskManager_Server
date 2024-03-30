const facultad = require("../models/facultad.model");
const vwFacultad = require("../views/facultad.view");
const { handleCreateUpdate } = require("./globalController");
const {
  handleResponse,
  handleErrorResponse,
  handleNull,
} = require("../utilities/functions");
const id_colum = "idfacultad";

exports.getAllFaculties = async (req, res) => {
  try {
    handleResponse(res, 200, await facultad.findAll());
  } catch (err) {
    handleErrorResponse(res, 500, err);
  }
};

exports.getOneFaculty = async (req, res) => {
  try {
    handleNull(
      res,
      await facultad.findOne({
        where: {
          idfacultad: req.params.faculty_id,
        },
      })
    );
  } catch (err) {
    handleErrorResponse(res, 500, err);
  }
};
exports.insertFaculty = async (req, res) => {
  const data = ({ nombre_facultad, descripcion } = req.body);
  await handleCreateUpdate(res, data, facultad);
};
exports.updateFaculty = async (req, res) => {
  const { faculty_id } = req.params;
  const data = ({ nombre_facultad, descripcion } = req.body);
  data["estado"] = 2;
  await handleCreateUpdate(res, data, facultad, faculty_id);
};
exports.deleteFaculty = async (req, res) => {
  const data = { estado: 4 };
  const { faculty_id } = req.params;
  await handleCreateUpdate(res, data, facultad, faculty_id);
};
exports.viewFaculties = async (req, res) => {
  const viewFaculties = await vwFacultad.findAll();
  handleResponse(res, 200, viewFaculties);
};
