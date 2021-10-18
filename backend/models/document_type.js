const { Schema, model } = require("mongoose");

const document_typeSchema = Schema({
    name: {
        type: String,
        require: [true, 'El tipo de documento es obligatorio']
    },
    state:{
        type: Boolean,
        default: true,
        required: true
    }
})

module.exports = model('Document_type', document_typeSchema)