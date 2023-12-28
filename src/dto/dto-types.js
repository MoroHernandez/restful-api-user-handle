import { Type } from "@sinclair/typebox"

export const idDTOSchema = Type.String({
    format:'uuid',
    errorMessage: {
        type:'Id type must be a string',
        format:'Id format must ve a uuid',
    }
})

export const nameDTOSchema = Type.String({
    minLength: 2,
    maxLength: 20,
    errorMessage: {
        minLength: 'Name must be at least 2 characters long',
        maxLength: 'Name must be up to 20 characters long',
    }
})

export const surnameDTOSchema = Type.String({ 
    minLength: 4,
    maxLength: 50,
    errorMessage: {
        minLength: 'Surname must be at least 2 characters long',
        maxLength: 'Surname must be up to 20 characters long',
    }
})

export const emailDTOSchema = Type.String({ 
    format:'email',
    errorMessage: {
        type:'Email type must be a string',
        format:'Format must comply an email format',
    }
})

export const passwordDTOSchema = Type.String({
    format:'password',
    minLength:10,
    maxLength:25,
    errorMessage: {
        type:'Password type must be a string',
        format:'Format password must have a capital letter, a small letter and a number.',
        minLength: 'Surname must be at least 10 characters long',
        maxLength: 'Surname must be up to 25 characters long',
    }
})  