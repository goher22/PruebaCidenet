const { DocumentType } = require("../models")

const procureDocumentsType = async (req, res) => {
    const documentsType = await DocumentType.find()
    res.json({DocumentsType: documentsType})
}

module.exports = {
    procureDocumentsType
}