import { jwtVerify } from "jose"

const userJWTDTO = async (req, res, next) => {
    const {authorization} = req.headers

    if(!authorization) return res.status(401).send({errors:['Unauthorized user']})

    const jwt = authorization.split(' ')[1]

    if (!jwt) return res.status(401).send({errors:['Unauthorized user']})

    try {
        const enconder = new TextEncoder()
        const {payload} = await jwtVerify(jwt, enconder.encode(process.env.JWT_PRIVATE_KEY))

        req.id = payload.id

        next()
    } catch (e) {
        return res.status(401).send({errors:['Unauthorized user']})
    }
}

export default userJWTDTO