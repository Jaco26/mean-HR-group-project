app.controller('TrackController', ['EmployeeService', function(EmployeeService){
    let self = this;

    console.log(EmployeeService.test);
    self.allEmployees = EmployeeService.allEmployees

}]); // END TrackController