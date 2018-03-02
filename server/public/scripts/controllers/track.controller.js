app.controller('TrackController as tc', ['es', function(es){
    let self = this;

    console.log(es.test);
    self.allEmployees = es.allEmployees

}]); // END TrackController