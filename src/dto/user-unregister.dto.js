import {Type} from '@sinclair/typebox'
import Ajv from 'ajv'
import addErrors from 'ajv-errors'
import { passwordDTOSchema } from '#Dto/dto-types.js'



const UnregisterDTOSchema = Type.Object({
    password: passwordDTOSchema
},{
    additionalProperties: false,
    errorMessage: {
        additionalProperties: 'Invalid object format'
    }
}) 

const ajv = new Ajv({allErrors: true}).addKeyword('kind').addKeyword('modifier')

ajv.addFormat("password", /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/)

addErrors(ajv)

const validateSchema = ajv.compile(UnregisterDTOSchema)

const userUnregisterDTO = (req, res, next) => {
    const isDTOvalid = validateSchema(req.body)

    if(!isDTOvalid) return res
        .status(400)
        .send({errors: validateSchema.errors.map((error) => error.message)})

    next()
}

export default userUnregisterDTO