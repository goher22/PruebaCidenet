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

AreaSchema.methods.toJSON = function(){
    const {__v, state, ...data} = this.toObject()
    return data
}

module.exports = model('Area', AreaSchema)