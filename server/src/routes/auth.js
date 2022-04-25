const express = require('express')

const router = express.Router()
const { check } = require('express-validator')
const { signout, signup, signin } = require('../controllers/auth')

router.get('/signout', signout)
router.post(
  '/signup',
  [
    check('name', 'name should be at least 3 char').isLength({ min: 3 }),
    check('email', 'email is required').isEmail(),
    check('password', 'password should be at least 3 char').isLength({
      min: 3,
    }),
  ],
  signup
)
router.post(
  '/signin',
  [
    check('email', 'email is required').isEmail(),
    check('password', 'password flied is required').isLength({
      min: 1,
    }),
  ],
  signin
)

module.exports = router
