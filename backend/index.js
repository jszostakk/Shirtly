const express = require('express');
const app = express();
const { port } = require('./config');
const apiRouter = require('./routes/api');
//import 'node_modules/bootstrap/dist/css/bootstrap.css';

require('./db/mongoose');

//routes
app.use('/', apiRouter);

//server
app.listen(port, function (){
    console.log('server na localhost ' + port);
});