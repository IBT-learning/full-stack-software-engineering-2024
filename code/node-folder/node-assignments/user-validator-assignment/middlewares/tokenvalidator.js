import jwt from 'jsonwebtoken'

const JWT_KEY = 'this is a secret'

const tokenvalidator = (req, res, next) => {
    try {
        let token = req.headers.authorization
        if (token) {
            if (token.includes('Bearer')) {
                token = token.split(' ')[1]
            }
            const payload = jwt.verify(token,JWT_KEY)
            if (!payload) {
                res.status(401).send('user not unauthorized')
            }
            // console.log(payload);
            req.user = { userId: payload.userId }
            //you can use the payload to do anything
            next()
        } else {
            return res.status(401).send('authorization missing')
        }
    } catch (err) {
        return res.send(err.message)
    }
}

export default tokenvalidator