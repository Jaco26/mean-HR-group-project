app.service('EmployeeService', ['$http', function($http) {
    let self = this;

    self.test = 'Hi hi hi'
    self.allEmployees = {list: []}; // Populate with successful response from self.getAllEmployees
    self.newEmployee = {}; // Link to add.employee controller and view. It will be populated by inputs that ng-model it.
    self.editedEmployee = {}; // This will be populated by the inputs in the employee-edit form

    self.getAllEmployees = () => {
        $http({
            method: 'GET',
            url: '/employees'
        }).then( (response) => {
            self.allEmployees.list = response.data; // Make self.allEmployees equal to the GET response.data           
            for(employee in self.allEmployees.list){
                employee.beingEdited = false;
            }  
            console.log(self.allEmployees);
        }).catch( (error) => {
            console.log('error in self.getAllEmployees:', error);
        }); // END $http
    } // END self.getAllEmployees

    self.addEmployee = function() {
        console.log('in self.addEmployee');
        
        $http({
            method: 'POST',
            url: '/employees',
            data: self.newEmployee,
        }).then( (response) => {
            console.log('Added employee', response);
            self.getAllEmployees(); 
        }).catch( (error) => {
            console.log('error in self.addEmployee', error);
        }); // END $http
    } // END self.addEmployee

    self.submitEditEmployee = (employee) => {
        const id = employee._id
        const updatedEmployee = employee;
        $http({
            method: 'PUT',
            url: `/employees/${id}`,
            data: updatedEmployee,
        }).then( (response) => {
            console.log('Edited employee', response);
            self.editedEmployee = {}; // reset self.editedEmployee to empty object
            self.getAllEmployees();
        }).catch( (error) => {
            console.log('error in self.editEmployee');
        }); // END $http
    } // END self.editEmployee

    self.deleteEmployee = (employee) => {
        $http({
            method: 'DELETE',
            url: '/employees/'+employee._id,
        }).then( (response) => {
            console.log('Deleted employee', response);
            self.getAllEmployees();
        }).catch( (error) => {
            console.log('error in self.deleteEmployee', error);            
        }); // END $http
    } // END self.deleteEmployee

}]); // END EmployeeService