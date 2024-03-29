const Semester = require('../models/semestre.model')
const semester =require('../models/semestre.model')
const {handleResponse,handleErrorResponse}= require('../utilities/functions')


exports.getSemesters=async(req,res)=>{
    
    try{
        const semesters= await semester.findAll()
        handleResponse(res,200,semesters)
    }
    catch(err){
        handleErrorResponse(500,err)
    }
}

exports.getSemester=async(req,res)=>{
   try{
    const id= req.params.id_semester
    const semester= await Semester.findOne({
        where:{
            idsemestre:id
        }
    })
    handleResponse(res,200,semester)
    
   }catch(err){
    handleErrorResponse(500,err)
   }

}
exports.addsemester=async(req,res)=>{
    const { semestre ,fecha_inicio ,fecha_final ,periodo_academico}= req.body
    try{
         
        await semester.create({
            semestre,
            fecha_inicio,
            fecha_final,
            periodo_academico,
            estado:'1'
        }
         
        )  
        handleResponse(res,200,"creado con exito")
    }
    catch(err){
       handleErrorResponse(500,err)
    }
}