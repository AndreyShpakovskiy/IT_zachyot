const express = require('express');
const router = express.Router();
const fs = require('fs');
var data = fs.readFileSync('json/data.json', "utf8");

/* GET home page. */
router.get('/', (req, res) => {
  res.set('Content-Type', 'application/json');
  res.send(data);
});

module.exports = router;
