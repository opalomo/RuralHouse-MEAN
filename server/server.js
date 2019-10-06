
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const { mongoose } = require('./database');

const app = express();

//in case the app is running on an external server -> use its port
app.set('port',process.env.PORT || 3000);

//for tabulating json responses
app.set('json spaces',2);

/*****************MIDDLEWARES*****************/

//to understand the data in the forms sent to us by the front
app.use(express.urlencoded({extended: false}));

app.use(morgan('common'));

app.use(cors());

//to support json format files
app.use(express.json());

app.use('/api/users', require('./routes/users.route.js'));

app.use('/api/houses', require('./routes/houses.route.js'));

/*******************************************/
/*************SERVER FUNCTIONS*************/

app.listen(app.get('port'), () => {
  console.log('Server started!')
});


