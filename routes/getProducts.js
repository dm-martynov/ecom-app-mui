const router = require('express').Router()
const passport = require('passport')
const Product = require('../model/Products')
const axios = require('axios')

let currencyRates

router.get(
  '/get',
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    try {
      // if (!currencyRates) {
      const currencyRates = await axios.get(
        'https://api.exchangeratesapi.io/latest?base=USD'
      )
      // }

      const skip =
        req.query.skip && /^\d+$/.test(req.query.skip)
          ? Number(req.query.skip)
          : 0
      const limit =
        req.query.limit && /^\d+$/.test(req.query.limit)
          ? Number(req.query.limit)
          : 30
      const productsFromDB = await Product.find({}, undefined, {
        skip,
        limit,
      }).lean()
      productsFromDB.forEach(
        (product) =>
          (product.price = {
            USD: product.price,
            EUR: (parseFloat(product.price) * currencyRates.data.rates.EUR)
              .toFixed(2)
              .toString(),
            CAD: (parseFloat(product.price) * currencyRates.data.rates.CAD)
              .toFixed(2)
              .toString(),
          })
      )
      res.send(productsFromDB)
    } catch (e) {
      res.status(400).send(e)
    }
  }
)

module.exports = router
