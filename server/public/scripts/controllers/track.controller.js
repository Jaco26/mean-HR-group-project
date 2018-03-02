app.controller('TrackController', ['EmployeeService', function(EmployeeService){
    let self = this;

    console.log(EmployeeService.test);
    self.allEmployees = EmployeeService.allEmployees
    self.getAllEmployees = EmployeeService.getAllEmployees
    self.deleteEmployee = EmployeeService.deleteEmployee;
    
    // ON LOAD
    self.getAllEmployees();


}]); // END TrackController