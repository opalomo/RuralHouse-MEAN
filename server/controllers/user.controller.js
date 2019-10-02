
const User = require('../models/user');

const userCtrl = {};

const users = require('../sampleData.json');

userCtrl.getUsers = async (req, res) => { // escribimos el async antes de que empiiece la funcion

  const users = await User.find() // manera de decir que esto va a tomar tiempo, pero que espere a que termine para asignar el valor
  console.log('Mostrando usuarios...');
  res.json(users);
}

userCtrl.getUser = async (req, res) => {
  const user = await User.findById(req.params.id);
  res.json(user);
}

userCtrl.createUser = async (req,res) => {
  const user = new User(req.body);
  await user.save();
  console.log('Usuario creado');
 /* res.json({
    status: 'User created'
  });*/
  res.send( await User.find());
}

userCtrl.editUser = async (req,res) => {

   const {id} = req.params; // esto es como decir que quiero el id de dentro de req.params
   const user = {
     name: req.body.name,
     surname: req.body.surname,
     email: req.body.email,
     password: req.body.password,
   };

  await User.findByIdAndUpdate(id, { $set: user }, {new: true}) //actualiza el usuario con el id ese con los nuevos parametros
  //new:true implica que si le doy un dato que no existe lo crea por mi
  res.json({
    status: 'User edited'
  });
}

userCtrl.deleteUser = async (req,res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({
    status: 'User deleted'
  });
}

module.exports = userCtrl;
