const { Router } = require('express');
const router = Router();

router.get('/test',(req,res) => {
  const data = {
    "House": "Sample House 1",
    "Description": "Lorem ipsum dolor sit amet consectetur adipiscing elit magna enim, facilisis quam nulla sociosqu dictumst donec pellentesque auctor, neque nullam vitae a placerat semper bibendum morbi."
  }
  res.json(data);
});

module.exports = router;
