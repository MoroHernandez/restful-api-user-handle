import {Type} from '@sinclair/typebox'
import Ajv from 'ajv'
import addErrors from 'ajv-errors'
import { nameDTOSchema, surnameDTOSchema } from '#Dto/dto-types.js'


const UpdateDataDTOSchema = Type.Object({
    name: nameDTOSchema,
    surname: surnameDTOSchema
},{
    additionalProperties: false,
    errorMessage: {
        additionalProperties: 'Invalid object format'
    }
}) 

const ajv = new Ajv({allErrors: true}).addKeyword('kind').addKeyword('modifier')

addErrors(ajv)

const validateSchema = ajv.compile(UpdateDataDTOSchema)

const userUpdateDataDTO = (req, res, next) => {
    const isDTOvalid = validateSchema(req.body)

    if(!isDTOvalid) return res
        .status(400)
        .send({errors: validateSchema.errors.map((error) => error.message)})

    next()
}

export default userUpdateDataDTO