var config = require ('./dbconfig');
const sql = require ('mssql');


//Async is used for IO query to DB

async function getallCustomers(){

        let pool = await sql.connect(config);
        let customers =await pool.request().query("select * from customers");
        return customers.recordsets; 

}

async function getCustomer(employeeId){

        let pool = await sql.connect(config);
        let customers =await pool.request()
            .input('input_parameter',sql.Int,employeeId)    
            .query("select * from customers where employeeId=@input_parameter");
        return customers.recordsets; 
}

async function addCustomer(customer){

        let pool = await sql.connect(config);
        let insertCustomer = await pool.request()
            .input('firstName', sql.NVarChar, customer.firstName)
            .input('lastName',sql.NVarChar,customer.lastName)
            .input('employeeId',sql.NVarChar,customer.employeeId)
            .input('address',sql.NVarChar,customer.address)
            .execute('insertCustomer');
            return insertCustomer.recordsets;
}

async function deleteCustomer(employeeId){

    let pool = await sql.connect(config);
    let customers =await pool.request()
        .input('input_parameter',sql.Int,employeeId)    
        .query("Delete from customers where employeeId=@input_parameter");
    return "Deleted"; 
}


module.exports = {
    getallCustomers:getallCustomers,
    getCustomer:getCustomer,
    addCustomer:addCustomer,
    deleteCustomer:deleteCustomer
}