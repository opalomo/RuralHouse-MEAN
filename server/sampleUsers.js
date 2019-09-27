const {Router} = require('express');
const router = Router();

const fetch = require('node-fetch');

  // We'll use the async - await directives for asigning response var value after
  // the whole data is received
router.get('/', async (req,res) => {
  // request to third-party API which gives us sample data in JSON format
  // once we receive the info it's interpreted as plain text
  // we need to use the JSON parser combined with await
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await response.json();
  res.json(users);
});

module.exports = router;
