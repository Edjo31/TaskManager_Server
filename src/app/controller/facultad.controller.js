const facultad = require("../models/facultad.model");
const vwFacultad=require('../views/facultad.view')
const {
  handleResponse,
  handleErrorResponse,
} = require("../utilities/functions");

exports.getAllFaculties = async (req, res) => {
  try {
    const faculty = await facultad.findAll();
    handleResponse(res, 200, faculty);
  } catch (err) {
    handleErrorResponse(500, err);
  }
};

exports.getOneFalcuty = async (req, res) => {
  try {
    const id_faculty = req.params.facultad_id;
    const findFaculty = await facultad.findOne({
      where: {
        idfacultad: id_faculty,
      },
    });
    handleResponse(res, 200, findFaculty);
  } catch (err) {
    handleErrorResponse(500, err);
  }
};
exports.insertFaculty = async (req, res) => {
  const { nombre_facultad, descripcion } = req.body;

  try {
    await facultad.create({
      nombre_facultad,
      descripcion,
      estado: 1,
    });
    handleResponse(res, 200, "agregado con exito");
  } catch (err) {
    handleErrorResponse(500, err);
  }
};
exports.updateFaculty = async (req, res) => {
  const id = req.params.facultad_id;
  const { nombre_facultad, descripcion } = req.body;
  try {
    await facultad.update(
      {
        nombre_facultad,
        descripcion,
        estado: 2,
      },
      {
        where: {
          idfacultad: id,
        },
      }
    );
    handleResponse(res, 200, "editado con exito");
  } catch (err) {
    handleErrorResponse(500, err);
  }
};
exports.deleteFaculty = async (req, res) => {
  const id = req.params.facultad_id;
  try {
    await facultad.update(
      {
        estado: 4,
      },
      {
        where: {
          idfacultad: id,
        },
      }
    );
    handleResponse(res, 200, "Borrado con exito");
  } catch (err) {
    handleErrorResponse(500, err);
  }
};
exports.viewFaculties=async (req,res)=>{
    const viewFaculties= await vwFacultad.findAll()
    handleResponse(res,200,viewFaculties)
}
