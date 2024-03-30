const Semester = require("../models/semestre.model");
const semester = require("../models/semestre.model");
const {
  handleResponse,
  handleErrorResponse,
  handleNull,
} = require("../utilities/functions");

exports.getSemesters = async (req, res) => {
  try {
    const semesters = await semester.findAll();
    handleResponse(res, 200, semesters);
  } catch (err) {
    handleErrorResponse(500, err);
  }
};

exports.getSemester = async (req, res) => {
  try {
    const id = req.params.id_semester;
    const semester = await Semester.findOne({
      where: {
        idsemestre: id,
      },
    });
    handleNull(res,semester)
  } catch (err) {
    handleErrorResponse(500, err);
  }
};
exports.addSemester = async (req, res) => {
  const { semestre, fecha_inicio, fecha_final, periodo_academico } = req.body;
  try {
    await semester.create({
      semestre,
      fecha_inicio,
      fecha_final,
      periodo_academico,
      estado: "1",
    });
    handleResponse(res, 201, "creado con exito");
  } catch (err) {
    handleErrorResponse(500, err);
  }
};

exports.updateSemester = async (req, res) => {
  const id = req.params.id_semester;
  const { semestre, fecha_inicio, fecha_final, periodo_academico } = req.body;
  try {
    await semester.update(
      {
        semestre,
        fecha_inicio,
        fecha_final,
        periodo_academico,
        estado: 2,
      },
      {
        where: {
          idsemestre: id,
        },
      }
    );

    handleResponse(res, 200, "actualizado con exito");
  } catch (err) {
    handleErrorResponse(500, err);
  }
};
exports.deleteSemester = async (req, res) => {
  const id = req.params.id_semester;

  try {
    await semester.update(
      {
        estado: 4,
      },
      {
        where: {
          idsemestre: id,
        },
      }
    );
    handleResponse(res, 200, "Borrado con exito");
  } catch (err) {
    handleErrorResponse(500, err);
  }
};
