
let chai = require("chai");
 let chaiHttp = require("chai-http");
const { response } = require("express");
 let server = "http://ac-server01:3000"
 //let server = ("../index.js")

 chai.should();
 chai.use(chaiHttp);

 describe ('Customer API',()=>{
   
    describe('Get /customers/:id',()=>{
        it ("Should get customer by employeeId: 77", (done)=>{
            const employeeId = 77
            chai.request(server)
            
                .get("/customers/"+employeeId)
                .end((err, response)=>{
                    response.should.have.status(200);
                    response.body.should.be.a('object');
                    response.body.should.have.property('employeeId')
                
                done();
            })
        })

    })

    //post route
    describe('Post /customers/:id',()=>{
        it ("Should create customer with employeeId: 55", (done)=>{
            const createCust=  {
                "firstName": "Andrew",
                "lastName": "Chai",
                "employeeId": "55",
                "address": "71 MIA Building"
            };
            chai.request(server)
                .post("/customers")
                .send(createCust)
                .end((err, response)=>{
                    response.should.have.status(201);                
                done();
            })
        })

    })

    //delete route
    describe('Delete /customers/:id',()=>{
        it ("Should Delete customer with employeeId: 55", (done)=>{
            const employeeId= 55 
            chai.request(server)
                .delete("/customers/"+employeeId)
                .end((err, response)=>{
                    response.should.have.status(200);                
                done();
            })
        })

    })

});
