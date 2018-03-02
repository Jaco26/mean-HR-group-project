const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(express.static('server/public'));


// MONGOOSE
const mongoose = require('mongoose');
const databaseUrl = 'mongodb://localhost:27017/employees';

mongoose.connection.on('connected', function() {
    console.log('mongoose connect to:', databaseUrl);    
})

mongoose.connection.on('error', function (error) {
    console.log('Error on connection:', error);
})

mongoose.connect(databaseUrl);

// ROUTER PUT IT INNNNN N N N N NN N N~!N!N!N!N!N!!!!!!!D OOOOOO IIIIIITTTTTTT
const employeeRouter = require('./routers/employee-router');
app.use('/employees', employeeRouter);



//Start up the server
const port = process.env.PORT || 5000

app.listen(port, function () {
    console.log('Listening on port: ', port);
});

