
//config stuff
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
require('dotenv').config()

//getting express and such up and moving
const app = express();
app.use( bodyParser.json() );
app.use( cors() );


//getting the database connected
massive( process.env.CONNECTION_STRING ).then( dbInstance => app.set('db', dbInstance) );




//shit that I am adding
const controller = require('./controller.js')



//the actual program or something

const port = process.env.PORT || 1337;
app.listen( port, () => { console.log(`Server listening on port ${port}.`); } );


app.get('/sayHello', controller.sayHello)
app.get('/', controller.home)
