const express = require('express');
const app = express();
const { port } = require('./config');
const apiRouter = require('./routes/api');
const bodyParser = require('body-parser');
//import 'node_modules/bootstrap/dist/css/bootstrap.css';

require('./db/mongoose');

app.use(bodyParser.json());
//routes
app.use('/api/', apiRouter);

//server
app.listen(port, function (){
    console.log('server na localhost ' + port);
});