const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 3,
    max: 255,
  },
  email: {
    type: String,
    required: true,
    max: 255,
    min: 6,
  },
  password: {
    type: String,
    required: true,
    max: 1024,
    min: 6,
  },
  date: {
    type: Date,
    default: Date.now,
  },
})

const User = (module.exports = mongoose.model('User', userSchema))

module.exports.getUserByLogin = function (login, callback) {
  const query = { login: login }
  User.findOne(query, callback)
}

module.exports.getUserById = function (id, callback) {
  User.findById(id, callback)
}

module.exports.addUser = async function (newUser, callback) {
  const salt = await bcrypt.genSalt(10)
  const hashPassword = await bcrypt.hash(newUser.password, salt)
  newUser.password = hashPassword
  newUser.save(callback)
}

module.exports.comparePass = function (passFromUser, userDBPass, callback) {
  bcrypt.compare(passFromUser, userDBPass, (err, isMatch) => {
    if (err) throw err
    callback(null, isMatch)
  })
}
