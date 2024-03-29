
exports.handleResponse=(res,status,body)=>{
    res.status(status).send({
        status,
        body
    })
}
exports.handleErrorResponse=(status,error)=>{
    res.status(status).send({
        error
    })
}