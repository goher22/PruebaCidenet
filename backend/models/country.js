const { Schema, model } = require("mongoose");

const CountrySchema = Schema({
    name: {
        type: String,
        require: [true, 'El nombre del pais es obligatorio']
    },
    iso: {
        type: String,
        require: [true, 'El iso del pais es obligatorio']
    },
    state:{
        type: Boolean,
        default: true,
        required: true
    }
})

module.exports = model('Country', CountrySchema)