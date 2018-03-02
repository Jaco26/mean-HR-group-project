console.log('Hello from the add controller');
app.controller('AddController', ['EmployeeService', function(EmployeeService){
    console.log('AddController created');
    let self = this; 
    self.newEmployee = EmployeeService.newEmployee;
    self.addEmployee = EmployeeService.addEmployee;
    self.getAllEmployees = EmployeeService.getAllEmployees;
    // self.allEmployees = EmployeeService.allEmployees
    


    // ON LOAD
    self.getAllEmployees();
    
    
}]);