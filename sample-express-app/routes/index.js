var express = require('express');
var router = express.Router();

router.get('/data', function(req, res, next) {
  res.status(200).json({"message": " React and Express API works"})
});

module.exports = router;
