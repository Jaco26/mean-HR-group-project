const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema(
{
    name: {type: String, required: true},
    employeeID: {type: Number, required: true},
    salary: {type: Number, required: true},
    jobTitle: {type: String, required: true},
    dateHired: {type: Date, required: true}
}
);

const Employee = mongoose.model('Employee', EmployeeSchema, 'employees');


router.post('/', (request, response) => {
    let newEmployee = new Employee(request.body);
    console.log('Employee to save is', request.body);
    newEmployee.save((error, savedEmployee) => {
      if (error){
        console.log('error on add employee:', error);
        response.sendStatus(500);
      } else {
        response.sendStatus(201);
      }
    })
  });


  router.get('/', (request, response) => {
    Employee.find({}, (error, gotEmployees) => {
      if (error){
        console.log('error on get employees:', error);
        response.sendStatus(500);
      } else {
        response.send(gotEmployees);
      }
    })
  });

  router.delete('/:id', (request, response) => {
    let id = request.params.id;
    Employee.findByIdAndRemove(
      {"_id": id},
      (error, success) => {
        if(error){
          console.log('error in delete', error);
          response.sendStatus(500);
        } else {
          response.sendStatus(200);
        }
      })
  });














  module.exports = router;