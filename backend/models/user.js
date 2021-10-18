const { Schema, model } = require("mongoose");

const UserSchema = Schema({
    document_type: {
        type: Schema.Types.ObjectId,
        ref: 'Country',
        required: [true, 'El typo del documento es obligatorio']
    },
    document: {
        type: String,
        require: [true, 'El documento es obligatorio'],
        unique: true
    },
    first_name: {
        type: String,
        require: [true, 'El primer nombre es obligatorio']
    },
    second_name: {
        type: String
    },
    surname: {
        type: String,
        require: [true, 'El primer apellido es obligatorio']
    },
    second_surname: {
        type: String
    },
    country: {
        type: Schema.Types.ObjectId,
        ref: 'Country',
        required: [true, 'El pais es obligatorio']
    },
    email: {
        type: String,
        required: [true, 'El correo es obligatorio'],
        unique: true
    },
    area: {
        type: Schema.Types.ObjectId,
        ref: 'Area',
        required: [true, 'El area es obligatorio']
    },
    date_admission: {
        type: Date,
        require: [true, 'La fecha de ingreso es obligatorio']
    },
    date_created:{
        type: Date,
        require: true,
        default: Date.now
    },
    state:{
        type: Boolean,
        default: true,
        required: true
    }
})

UserSchema.methods.toJSON = function(){
    const {__v, ...data} = this.toObject()
    return data
}

module.exports = model('User', UserSchema)