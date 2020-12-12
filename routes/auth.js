const router = require('express').Router()
const User = require('../model/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const passport = require('passport')
const { registerValidation } = require('../validation')
const { loginValidation } = require('../validation')

router.post('/register', async (req, res) => {
  const { error } = registerValidation(req.body)
  if (error) return res.status(400).send(error.details[0].message)

  const emailExist = await User.findOne({ email: req.body.email })
  if (emailExist) return res.status(400).send('Email already exists')

  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  })
  User.addUser(newUser, (err, user) => {
    if (err) res.status(400).send(err)
    else res.json({ message: 'User was added' })
  })
})

router.post('/login', async (req, res) => {
  const { error } = loginValidation(req.body)
  if (error) return res.status(400).send(error.details[0].message)

  User.getUserByLogin(login, (err, user) => {
    if (err) throw err
    if (!user) return res.status(400).send('Email or password is wrong')

    User.comparePassword(password, user.password, (err, isMatch) => {
      if (err) throw err
      if (isMatch) {
        const token = jwt.sign(user, process.env.TOKEN_SECRET, {
          expiresIn: 3600 * 24,
        })

        res.json({
          success: true,
          token: 'JWT' + token,
          user: {
            id: user._id,
            name: user.name,
            email: user.email,
          },
        })
      } else return res.status(400).send('Email or password is wrong')
    })
  })

  const user = await User.findOne({ email: req.body.email })
  if (!user) return res.status(400).send('Email or password is wrong')

  const validPass = await bcrypt.compare(req.body.password, user.password)
  if (!validPass) return res.status(400).send('Email or password is wrong')

  const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET)
  res.header('auth-token', token).send(token)
})

module.exports = router
