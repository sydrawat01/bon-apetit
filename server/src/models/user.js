const mongoose = require('mongoose')

const { Schema } = mongoose
// const uuidv1 = require('uuid/v1')
const crypto = require('crypto')
const { v1: uuidv1 } = require('uuid')

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      maxlength: 32,
      trim: true,
    },
    lastname: {
      type: String,
      maxlength: 32,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    userinfo: {
      type: String,
      trim: true,
    },
    encry_password: {
      type: String,
      required: true,
    },
    salt: String,
    role: {
      type: Number,
      default: 0,
    },
    visits: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
)

userSchema
  .virtual('password')
  .set(function (password) {
    this._password = password
    this.salt = uuidv1()
    this.encry_password = this.securePassword(password)
  })
  .get(function () {
    return this._password
  })
userSchema.methods = {
  authenticate(plainpassword) {
    return this.securePassword(plainpassword) === this.encry_password
  },

  securePassword(plainpassword) {
    if (!plainpassword) return ''
    try {
      return crypto
        .createHmac('sha256', this.salt)
        .update(plainpassword)
        .digest('hex')
    } catch (err) {
      return ''
    }
  },
}
module.exports = mongoose.model('User', userSchema)