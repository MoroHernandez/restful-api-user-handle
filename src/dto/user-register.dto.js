import {Type} from '@sinclair/typebox'
import Ajv from 'ajv'
import addFormats from 'ajv-formats'
import addErrors from 'ajv-errors'



const RegisterDTOSchema = Type.Object({
    _id:Type.String({
        format:'uuid',
        errorMessage: {
            type:'Id type must be a string',
            format:'Id format must ve a uuid'
        }
    }),
    name:Type.String({
        minLength: 2,
        maxLength: 20,
        errorMessage: {
            minLength: 'Name must be at least 2 characters long',
            maxLength: 'Name must be up to 20 characters long'
        }
    }),
    surname:Type.String({ 
        minLength: 4,
        maxLength: 50,
        errorMessage: {
            minLength: 'Surname must be at least 2 characters long',
            maxLength: 'Surname must be up to 20 characters long'
        }
    }),
    email:Type.String({ 
        format:'email',
        errorMessage: {
            type:'Email type must be a string',
            format:'Format must comply an email format'
        }
    }),
    password:Type.String({
        format:'password',
        mixLength:10,
        maxLength:25,
        errorMessage: {
            type:'Password type must be a string',
            format:'Format password must have a capital letter, a small letter and a number.',
            minLength: 'Surname must be at least 10 characters long',
            maxLength: 'Surname must be up to 25 characters long'
        }
    })  
}) 

const ajv = new Ajv()
addFormats(ajv, [])