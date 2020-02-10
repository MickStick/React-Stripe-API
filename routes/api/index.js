var express = require('express');
var router = express.Router();
const stripeApi = require('./stripe')

/* stipe API*/
router.use('/', stripeApi)

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({status: 200, message: "Nothing here"});
});


module.exports = router;
