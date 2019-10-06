
const House = require('../models/house');

const houseCtrl = {};

houseCtrl.getHouses = async (req, res) => {

  const houses = await House.find()
  console.log('Mostrando casas...');
  res.json(houses);
}

houseCtrl.getHouse = async (req, res) => {
  const house = await House.findById(req.params.id);
  res.json(house);
}

houseCtrl.createHouse = async (req,res) => {
  const house = new House(req.body);
  await house.save();
  console.log('Casa creada');
  res.json( await House.find() );
}

houseCtrl.editHouse = async (req,res) => {

   const {id} = req.params;
   const house = {
     name: req.body.houseName,
     owner: req.body.owner,
     rooms: req.body.rooms,
     beds: req.body.beds,
     bathrooms: req.body.bathrooms
   };

  await House.findByIdAndUpdate(id, { $set: house }, {new: true}) //actualiza el usuario con el id ese con los nuevos parametros
  //new:true implica que si le doy un dato que no existe lo crea por mi
  res.json({
    status: 'House edited'
  });
}

houseCtrl.deleteHouse = async (req,res) => {
  await House.findByIdAndDelete(req.params.id);
  res.json({
    status: 'House deleted'
  });
}

module.exports = houseCtrl;
