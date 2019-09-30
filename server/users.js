const { Router } = require('express');

const router = Router();

const users = require('./sampleData.json');

const _= require('underscore');

//esta va a ser la funcion de logeo
/*router.get('/', (req,res) => { //mas adelante hacerlo con post

  const { email, password } = req.body;

  if ( email && password ) {

    _.each(users,(user, i) => {

      if(users.email == email) {

        res.send(true);
      }
    });

    res.send(false);

  } else {

    res.send('Wrong request');
  }
});*/

router.get('/', (req,res) => {
  res.send(users);
});


//esta va a ser la funcion de registro
router.post('/', (req,res) => {

  const { name, surname, email, password} = req.body;

  console.log('Backend >> via POST: '+req.body);

  if (name && surname && email && password) {

    const id = users.length + 1;

    const newUser = {...req.body, id};

    users.push(newUser);

    console.log('Bakend >> Usuario añadido');

    res.json(users);

  } else {

    res.send('Wrong request');
  }
});

router.put('/', (req,res) => {

  const { name, surname, email, password} = req.body;

  console.log('Backend >> via PUT: ' + req.body);

  if (name && surname && email && password) {

    const id = users.length + 1;

    const newUser = {...req.body, id};

    users.push(newUser);

    console.log('Bakend >> Usuario añadido');

    res.json(users);

  } else {

    res.send('Wrong request');
  }
});

module.exports = router;

