import mongoose from 'mongoose';
import usuarioSchema from '../schema/usuario.schema.js';

const usuarioModel = mongoose.model("usuario", usuarioSchema);
export default usuarioModel;