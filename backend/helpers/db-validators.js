
const { DocumentType, Area, Country, User } = require('../models')

const existsUserId = async (id) => {
    const existeUser = await User.findById(id)
    if(!existeUser) throw new Error(`El id ${id} no existe`)
}

const existsdocument_type = async (id) => {
    const document_type = await DocumentType.findById(id)
    if(!document_type) throw new Error(`El id ${id} no existe`)
}

const existscountry = async (id) => {
    const country = await Country.findById(id)
    if(!country) throw new Error(`El id ${id} no existe`)
}

const existsarea = async (id) => {
    const area = await Area.findById(id)
    if(!area) throw new Error(`El id ${id} no existe`)
}

const existsDocument = async(document) =>{
    const documentEmail = await User.findOne({document})
    if(documentEmail) throw new Error(`El documento ${document} ya esta registrado`)
}

module.exports = {
    existsdocument_type,
    existscountry,
    existsarea,
    existsDocument,
    existsUserId
}