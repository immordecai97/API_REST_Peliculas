import mongoose from "mongoose"

// schema
const usuarioSchema = new mongoose.Schema({
    nombre: {
        type: String,
        // required: true,
        minlength: 3,
        maxlength: 6,
        // match: /^[a-zA-Z0-9]+$/
    },
    password: {
        type: String,
        // match: /^[a-zA-Z0-9]{3,6}$/
    },
    email: {
        type: String,
        required: true,
        unique: true,
        // match: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
    },
    estado: {
        type: Boolean,
        // required: true
    },
    imagen: {
        type: String,
        required: false
    }
})

export default usuarioSchema