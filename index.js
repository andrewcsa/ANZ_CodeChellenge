//var Db = require('./dboperation');
//var Customer = require('./customers');
const dboperation = require('./dboperation');
const commmonlib = require('./commonlib');
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
//const { request, response } = require('express');
const res = require('express/lib/response');
const req = require('express/lib/request');
var app = express();
var router = express.Router();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use('/', router);

router.use((request, response,next)=>{
    console.log('service is called at '+ new Date() );
    //console.log('request '+ request);
    next();
});

router.route('/customers').get((req,res)=>{
    dboperation.getallCustomers().then(result =>{
        //console.log(result);
        //check if Response has velue, if yes return value else return message
    (commmonlib.hasResult(result[0])?res.json(result[0]):res.status(400).send("Status: No Record"))    
    })
    .catch(err => {
        console.log(err.message);
        res.status(500).json(commmonlib.Error(err.message,500))
    })

})

router.route('/customers/:id').get((req,res)=>{

    dboperation.getCustomer(req.params.id).then(result =>{   
        //console.log(result); 
         //check if Response has velue, if yes return value else return message
        (commmonlib.hasResult(result[0][0])?res.json(result[0][0]):res.status(400).send("{Status: \"ID" +req.params.id+" Could not be found\"}"))
    })
    .catch(err => {
        console.log(err.message);
        res.status(500).json(commmonlib.Error(err.message,500))
    })

})

router.route('/customers/:id').delete((req,res)=>{

    dboperation.deleteCustomer(req.params.id).then(result =>{   
        //console.log(result); 
         //check if Response has velue, if yes return value else return message
        (res.send("{Status: \"ID" +req.params.id+" has been deleted\"}"))
    })
    .catch(err => {
        console.log(err.message);
        res.status(500).json(commmonlib.Error(err.message,500))
    })

})


router.route('/customers').post((req,res)=>{
     let customer = req.body;

     /*
     Check if request is valid. 
     For now only validate  Lastname properties
     */ 
     var isValid = commmonlib.Validation(customer);

    console.log("isValid: "+isValid);

    if (!isValid){
        res.status(400).json(commmonlib.Error('LastName could not be blank',400))            
    }
    else{
        dboperation.addCustomer(customer).then(result =>{
            res.status(201).json("{Status: Success}");
        })
        .catch(err => {
            console.log(err.message);
            res.status(500).json(commmonlib.Error(err.message,500))
        })
    }
        
})


var port = process.env.PORT || 3000;
app.listen(port);
console.log('API Service is runnning at port: ' + port + ' and listening');
