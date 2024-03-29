const {Sequelize,DataTypes,Model}=require('sequelize')
const sequelize =require('../config/sequelizeConect')

class Facultad extends Model {} 

Facultad.init({
    idfacultad:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    nombre_facultad:{
        type:DataTypes.STRING,
        allowNull:false
    },
    descripcion:{
        type:DataTypes.STRING,
        allowNull:false
    },
    estado:{
        type:DataTypes.INTEGER,
        allowNull:false,
    }
},
{   
    sequelize,
    tableName:'facultad',
    timestamps:false
}
)

module.exports=Facultad