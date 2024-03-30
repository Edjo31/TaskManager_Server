const Semester = require("../models/semestre.model");
const { handleCreateUpdate } = require("./globalController");
const {
  handleResponse,
  handleErrorResponse,
  handleNull,
} = require("../utilities/functions");

exports.getSemesters = async (req, res) => {
  try {
    handleResponse(res, 200, await Semester.findAll());
  } catch (err) {
    handleErrorResponse(500, err);
  }
};

exports.getSemester = async (req, res) => {
  try {
    handleNull(
      res,
      await Semester.findOne({
        where: {
          idsemestre: req.params.id_semester,
        },
      })
    );
  } catch (err) {
    handleErrorResponse(res, 500, err);
  }
};
exports.addSemester = async (req, res) => {
  const data = ({ semestre, fecha_inicio, fecha_final, periodo_academico } =
    req.body);
  await handleCreateUpdate(res, data, Semester);
};

exports.updateSemester = async (req, res) => {
  const data = ({ semestre, fecha_inicio, fecha_final, periodo_academico } =
    req.body);
  data["estado"] = 2;
  const { id_semester } = req.params;
  await handleCreateUpdate(res, data, Semester, id_semester);
};
exports.deleteSemester = async (req, res) => {
  const data = { estado: 4 };
  const { id_semester } = req.params;
  await handleCreateUpdate(res, data, Semester, id_semester);
};
