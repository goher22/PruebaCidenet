const { Router } = require("express");
const { check } = require("express-validator") 
const { createUser, procureUsers, procureUser, updateUser, deleteUser } = require("../controllers");
const { existsdocument_type, existscountry, existsarea, existsDocument, existsUserId } = require('../helpers/db-validators')
const { validationData, validationCharacters, validationDate } = require('../middelwares')

const route = Router()

route.get('/', procureUsers)

route.get('/:id',[
    check('id').custom(existsUserId),
    validationData
], procureUser)

route.post('/', [
    validationCharacters,
    validationDate,
    check('document_type', 'El tipo de documento es obligatorio').not().isEmpty(),
    check('document_type').custom(existsdocument_type),
    check('document', 'El documento es obligatorio').not().isEmpty(),
    check('document', 'El documento debe tene una longitud máxima será de 20').isLength({max: 20}),
    check('document').custom(existsDocument),
    check('first_name', 'El primer nombre es obligatorio').not().isEmpty(),
    check('first_name', 'El primer nombre debe tene una longitud máxima será de 20').isLength({max: 20}),
    check('second_name', 'El segundo nombre es obligatorio').not().isEmpty(),
    check('second_name', 'El segundo nombre debe tene una longitud máxima será de 20').isLength({max: 20}),
    check('surname', 'El primer apellido es obligatorio').not().isEmpty(),
    check('surname', 'El primer apellido debe tene una longitud máxima será de 20').isLength({max: 20}),
    check('second_surname', 'El segundo apellido es obligatorio').not().isEmpty(),
    check('second_surname', 'El segundo apellido debe tene una longitud máxima será de 20').isLength({max: 50}),
    check('country', 'El pais es obligatorio').not().isEmpty(),
    check('country').custom(existscountry),
    check('area', 'El area es obligatorio').not().isEmpty(),
    check('area').custom(existsarea),
    check('date_admission', 'La fecha de inicio es obligatorio').not().isEmpty(),
    validationData
], createUser)

route.put('/:id',[
    check('id').custom(existsUserId),
    check('document_type', 'El tipo de documento es obligatorio').not().isEmpty(),
    check('document_type').custom(existsdocument_type),
    check('document', 'El documento es obligatorio').not().isEmpty(),
    check('document', 'El documento debe tene una longitud máxima será de 20').isLength({max: 20}),
    check('document').custom(existsDocument),
    check('first_name', 'El primer nombre es obligatorio').not().isEmpty(),
    check('first_name', 'El primer nombre debe tene una longitud máxima será de 20').isLength({max: 20}),
    check('second_name', 'El segundo nombre es obligatorio').not().isEmpty(),
    check('second_name', 'El segundo nombre debe tene una longitud máxima será de 20').isLength({max: 20}),
    check('surname', 'El primer apellido es obligatorio').not().isEmpty(),
    check('surname', 'El primer apellido debe tene una longitud máxima será de 20').isLength({max: 20}),
    check('second_surname', 'El segundo apellido es obligatorio').not().isEmpty(),
    check('second_surname', 'El segundo apellido debe tene una longitud máxima será de 20').isLength({max: 50}),
    check('country', 'El pais es obligatorio').not().isEmpty(),
    check('country').custom(existscountry),
    check('area', 'El area es obligatorio').not().isEmpty(),
    check('area').custom(existsarea),
    validationData
], updateUser)

route.delete('/:id', [check('id').custom(existsUserId), validationData],deleteUser)


module.exports = route