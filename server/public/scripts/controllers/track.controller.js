app.controller('TrackController', ['EmployeeService', function(EmployeeService){
    let self = this;
    
    

    console.log(EmployeeService.test);
    self.allEmployees = EmployeeService.allEmployees;
    self.getAllEmployees = EmployeeService.getAllEmployees;
    self.deleteEmployee = EmployeeService.deleteEmployee;
    self.submitEditEmployee = EmployeeService.submitEditEmployee;
    self.editedEmployee = EmployeeService.editedEmployee;
    
    self.showEditForm = (employee) => {
        employee.beingEdited = true;
    }

    self.cancelEdit = (employee) => {
        employee.beingEdited = false;
    }

   

    // ON LOAD
    self.getAllEmployees();



}]); // END TrackController