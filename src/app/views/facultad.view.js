const sequelize=require('../config/sequelizeConect')
const {DataTypes,Model}=require('sequelize')

class vwFaculty extends Model {}

vwFaculty.init({
   idfacultad:{
    type:DataTypes.INTEGER,
    primaryKey:true
   },
    nombre_facultad:{
        type:DataTypes.STRING,
        allowNull:false,
        
    },
    descripcion:{
        type:DataTypes.STRING,
        allowNull:false
    },
},{
    sequelize,
    tableName:'vw_facultad',
    timestamps:false
})

module.exports=vwFaculty