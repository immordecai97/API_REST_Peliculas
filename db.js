import mongoose from "mongoose";
import "dotenv/config";
const DB = process.env.DATA_BASE;
async function connectToDataBase(){
    try {
        await mongoose.connect(`mongodb://127.0.0.1:27017/${DB}`);
        // await mongoose.connect(`mongodb://localhost:27017/${DB}`);
        
        console.log('Conexión exitosa!');
    } catch (error) {
        console.error(error.message = 'No se pudo conectar');
    }
}
export default connectToDataBase;