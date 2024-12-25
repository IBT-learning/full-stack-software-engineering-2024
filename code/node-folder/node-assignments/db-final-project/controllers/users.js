import express from 'express'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const router = express.Router()

import Users from '../model/users.js'

const SALT = Number(process.env.SALT)
const JWT_KEY= process.env.JWT_KEY

router.post('/register', async (req, res) => {
    try {
        const required = [
            'firstname',
            'lastname',
            'email',
            'dob',
            'gender',
            'phone',
            'nationality',
            'username',
            'password',
            'password_confirmation',
        ]
        for (let field of required) {
            if (!req.body[field]) {
                return res.status(400).json({ error: `Missing ${field}` })
            }
        }
        if (req.body.password !== req.body.password_confirmation) {
                return res.status(400).json({ error: 'Passwords do not match' })
            }

        const hashedPassword = bcrypt.hashSync(req.body.password, SALT)

        const firstname = req.body.firstname
        const lastname = req.body.lastname 
        const email = req.body.email
        const dob = req.body.dob
        const gender = req.body.gender
        const phone = req.body.phone
        const nationality = req.body.nationality
        const username = req.body.username
        const password = req.body.password
        const password_confirmation = req.body.password_confirmation
        
        const user = new Users({
            firstname,
            lastname,
            email,
            dob,
            gender,
            phone,
            nationality,
            username,
            password: hashedPassword
        })
        await user.save()
        res.status(201).json({ message: 'User registered successfully',
                id: user._id,
                firstname: user.firstname,
                lastname: user.lastname,
                email: user.email,
                dob: user.dob,
                gender: user.gender,
                phone: user.phone,
                nationality: user.nationality,
                username: user.username
         })
     } catch (e) {
            return res.status(500).json({ error: e.message })
        }
    })

router.post('/login', async (req, res) => {
    try {
        const require = ['username', 'password']
        for (fields in require) {
            if (!req.body[fields]) {
                return res.status(400).json({ error: `Missing ${fields}` })
            }
        }

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