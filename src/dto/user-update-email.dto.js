import {Type} from '@sinclair/typebox'
import Ajv from 'ajv'
import addFormats from 'ajv-formats'
import addErrors from 'ajv-errors'
import { emailDTOSchema, passwordDTOSchema } from '#Dto/dto-types.js'



const UpdateEmailDTOSchema = Type.Object({
    email: emailDTOSchema,
    password: passwordDTOSchema
},{
    additionalProperties: false,
    errorMessage: {
        additionalProperties: 'Invalid object format'
    }
}) 

const ajv = new Ajv({allErrors: true}).addKeyword('kind').addKeyword('modifier')

ajv.addFormat("password", /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/)

addFormats(ajv, ['email'])
addErrors(ajv)

const validateSchema = ajv.compile(UpdateEmailDTOSchema)

const userUpdateEmailDTO = (req, res, next) => {
    const isDTOvalid = validateSchema(req.body)

    if(!isDTOvalid) return res
        .status(400)
        .send({errors: validateSchema.errors.map((error) => error.message)})

    next()
}

export default userUpdateEmailDTO