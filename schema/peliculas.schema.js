import mongoose from 'mongoose';
// import crypto from 'node:crypto';
const { Schema } = mongoose;

const peliculaSchema = new Schema({
    // id: {
    //     type: 'UUID',
    //     default: () => crypto.randomUUID()
    //     // require: true
    // },
    title: {
        type: String,
        require: true,
        message: 'CHE MANDALE UN TITLE MANIN'
    },
    sinopsis: String,
    year: {
        type: Number,
        // default: ()=> new Date().getFullYear(),
        require: true,
        message: 'CHE SE TE OLVIDÓ EL AÑO!'
    },
    director: {
        type: String,
        require: true
    },
    duration: {
        type: Number,
        require: true
    },
    poster: {
        type: String,
        require: true
    },
    genre: {
        type: [String],
        enum: {
            values: ["Romance", "Animation", "Action", "Adventure", "Adventure", "Sci-Fi", "Romance", "Biography", "Drama", "Comedy"],
            message: 'CHE el VALOR {VALUE} NO SOPORTADO'
        },
        require: true   
    },
    rate: {
        type: Number,
        require: false,
        min: 0,
        max: 10,
        // min: {
        //     value: 0,
        //     message: 'CHE PUSISTE menos del minimo {VALUE}'
        // },
        // max: {
        //     value: 10,
        //     message: 'CHE PUSISTE 35 MILLONES, {VALUE}'
        // },
        default: 0
    },
    hidden: {
        type: Boolean,
        default: false
    },
});

export default peliculaSchema;