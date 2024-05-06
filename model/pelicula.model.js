import mongoose from 'mongoose';
import peliculaSchema from './../schema/peliculas.schema.js';

const peliculaModel = mongoose.model('Pelicula', peliculaSchema);    //primero se crea el modelo
export default peliculaModel;