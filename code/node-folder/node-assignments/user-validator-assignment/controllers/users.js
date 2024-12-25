import express from 'express'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const router = express.Router()

import Users from '../model/Users.js'

const SALT = 12
const JWT_KEY = 'this is a secret'
router.post('/register', async (req, res) => {
  try {
    const { username, password, email } = req.body
    const checkuser =  await Users.findOne({ username })
    if (checkuser) {
        return res.status(409).send('Username already exists')
    }
    const checkemail = await Users.findOne({ email })
    if (checkemail) {
        return res.status(409).send('Email already exists')
    }
    if (password.length < 8) {
        return res.status(409).send('Password must be at least 8 characters long')
    }
    if (username.length < 5 || username.length > 20) {
        return res.status(409).send('Username must be at least 5 characters long and not greater than 20 characters')
    }

    const user = new Users({
        username,
        email,
        password: bcrypt.hashSync(password, SALT) // Hashing password before saving it to the database
  })
    await user.save()

    return res.send(`New user ${username} registered successfully`)
} catch (err) {
  console.log(err)
  return res.status(500).send(err)
}
})

router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body

    const user = await Users.findOne({ username })

    if (!user) {
      return res.status(404).send('User not found')
    }

    const isPasswordValid = await bcrypt.compare(password, user.password)

    if (!isPasswordValid) {
      return res.status(404).send('Password not correct')
    }
    const token = jwt.sign({userId: user._id}, JWT_KEY, {expiresIn: 60 * 60 * 24})
    return res.json({ message: "user verified", token, user })
  } catch (err) {
    console.log(err)
    return res.status(500).send(err)
  }
})

export default router