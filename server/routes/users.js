var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(["Josh", "Summer", "Angelo", "Steven"]);
  res.send('respond with a resource');
});

module.exports = router;
