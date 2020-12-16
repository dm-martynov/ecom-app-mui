const router = require('express').Router()
const passport = require('passport')

if (process.env.NODE_ENV !== 'production') require('dotenv').config()
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

let currencyRates

router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const body = {
      source: req.body.token.id,
      amount: req.body.amount,
      currency: req.body.currency,
    }
    stripe.charges.create(body, (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).send({ error: stripeErr })
      } else {
        res.status(200).send({ success: stripeRes })
      }
    })
  }
)

module.exports = router
