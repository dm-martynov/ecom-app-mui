const router = require('express').Router()
const passport = require('passport')
const Product = require('../model/Products')

router.get(
  '/get',
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    try {
      const skip =
        req.query.skip && /^\d+$/.test(req.query.skip)
          ? Number(req.query.skip)
          : 0
      const limit =
        req.query.limit && /^\d+$/.test(req.query.limit)
          ? Number(req.query.limit)
          : 30
      const productsFromDB = await Product.find({}, undefined, { skip, limit })

      res.send(productsFromDB)
    } catch (e) {
      res.status(400).send(e)
    }
  }
)

module.exports = router
