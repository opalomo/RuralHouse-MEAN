const { Router } = require('express');
const router = Router();
const _= require('underscore');

const houses = require('./sampleData.json');

//GET REQUESTS

router.get('/', (req, res) => {
  res.json(houses);
});

//POST REQUESTS

//vamos a hacer las validaciones a mano, pero hay una cosa llamada
//express validator, que debe de ser un middleware que auyda con esas cosas

router.post('/', (req, res) => {
  const { House, Description, Owner } = req.body;

  if ( House && Description && Owner ) {
    //el id es algo que debe ser autogenerado, por eso mismo se creara desde aqui
    const id = houses.length + 1;
    const newHouse = {...req.body, id};//que notacion es esa???
    houses.push(newHouse);
    res.json(houses);
  } else {
      res.send('Wrong request');
  }
});

//PUT REQUESTS


//DELETE REQUESTS

router.delete('/:id', (req, res) => {
  const { id } = req.params; // el id que se usa luego en el foreach debe ser declarado
  //en este caso solo hay un parametro de request por lo que se coge ese por defecto
  //underscore way of iterating
  _.each(houses,(house, i) => {
    if(house.id == id) {
      houses.splice(i, 1); // only remove the scoped house
    }
  })
  res.send(houses);
});


//necessary for consuming this file's content
module.exports = router;
