var express = require('express');
var router = express.Router();
const stripe = require('stripe')(process.env.STRIPE_SECRET)

/* Create charge with stripe. */
router.post('/stripe/charge', function(req, res, next) {
  const {total, currency, desc, token} = req.body
    // console.log(parseFloat(total))
    let amt = parseFloat(total) * 100
    stripe.charges.create({
        amount: parseInt(amt),
        currency: currency,
        description: desc,
        source: token.id,
      }).then(charge => {
        
        console.log("\x1b[32m",charge.status,"\x1b[37m")

        res.status(200).json({status: true, charge: charge})
      }).catch(e => {
        console.error("\x1b[31m",e.message,"\x1b[37m")
        res.status(400).json({status:false, error: e})
      })

});

/* Send email receipt */
router.post('/stripe/receipt', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
