const express = require('express')
const User = require('../models/User')
const router = express.Router()
const { body, validationResult } = require('express-validator')

//Create a user usin : POST "/api/auth"
router.post(
  '/',
  [
    body('name', 'Enter valid Name').isLength({ min: 3 }),
    body('mail', 'Enter valid Mail').isEmail(),
    body('password', 'Password Atleast 8 chars').isLength({ min: 8 })
  ],
  (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }
    User.create({
      name: req.body.name,
      mail: req.body.mail,
      password: req.body.password
    })
      .then(user => res.json(user))
      .catch(err => {
        console.log(err)
        res.json({ error: 'Please Eneter a unque for email',message: err.message })
      })
  }
)
module.exports = router
