
  function Error(message,status) {
    var err400 = {
        "Fault": {
          "code": "badRequest",
          "httpStatus": 400,
          "message": "You have supplied invalid request details",
          "serverDateTime": new Date(),
          "failures": message
        }
      };
    
    var err500 = {    
            "Fault": {
              "code": "internalError",
              "httpStatus": 500,
              "message": "An internal error was encountered processing the request",
              "serverDateTime": new Date(),
              "failures": message
            }
      }

      if (status == 500){
        return err500;  
      }
      else{
        return err400;
      }
    
  }

  function Validation(customer){
    console.log("ID: "+customer.employeeId)
    return (customer.lastName!=='' ? true : false)
  }

  function hasResult(result)
  {
    return (result?true:false);
  }


  module.exports = {
    Error:Error, 
    Validation:Validation,
    hasResult:hasResult
  }