import { SALT } from "#Constants/salt.js"
import UserModel from "#Schemas/user.schema.js"
import { hash } from "bcrypt"

const userRegisterController = async (req, res) => {
    const {_id, name, surname, email, password } = req.body

    const existingUserById = await UserModel.findById(_id).exec()
    if(existingUserById) return res.status(409).send({error:['Existing user with that ID']})

    const existingUserByEmail = await UserModel.findOne({email}).exec()
    if(existingUserByEmail) return res.status(409).send({error:['Existing user with that email']})

    const hashedPassword = await hash(password, SALT)
    const user = new UserModel({
        _id, 
        name,
        surname,
        email,
        password: hashedPassword
    })

    await user.save()

    return res.status(201).send('Successful registration')
}

export default userRegisterController 