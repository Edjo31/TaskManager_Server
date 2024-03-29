exports.handleResponse = (res, status, body) => {
  res.status(status).send({
    status,
    body,
  });
};
exports.handleErrorResponse = (status, error) => {
  res.status(status).send({
    error,
  });
};

exports.handleNull=(res,body)=>{
  if(body){
    res.status(200).send({
      status:200,
      body
    })
  }
  else{
    res.status(404).send({
      status:404,
      body:"Not found"
    })
  }
}