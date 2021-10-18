const { Schema, model } = require("mongoose");

const AreaSchema = Schema({
    name: {
        type: String,
        require: [true, 'El nombre del area es obligatorio']
    },
    state:{
        type: Boolean,
        default: true,
        required: true
    }
})

module.exports = model('Area', AreaSchema)