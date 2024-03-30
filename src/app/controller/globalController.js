const {
  handleResponse,
  handleErrorResponse,
} = require("../utilities/functions");

exports.handleCreateUpdate = async (res, data, Model, id_params = null) => {
  try {
    if (id_params) {
      const whereClause = {};
      whereClause[Model.primaryKeyAttribute] = id_params;
      await Model.update(data, { where: whereClause });
      handleResponse(res, 200, "actualizado con exito");
    } else {
      data["estado"] = 1;
      await Model.create(data);
      handleResponse(res, 200, "creado con exito");
    }
  } catch (err) {
    handleErrorResponse(res, 200, err);
  }
};
