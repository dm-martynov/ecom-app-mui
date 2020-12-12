const router = require('express').Router()
const passport = require('passport')

router.get(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    res.json([
      {
        action: 'changed currency from a to b',
        time: '24.11',
      },
      {
        action: 'changed currency from a to b',
        time: '24.11',
      },
    ])
  }
)

module.exports = router
