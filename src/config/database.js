import mongoose from "mongoose";

export const dbconnection = async () => {
    try{
        await mongoose.set("strictQuery", false).connect(process.env.MONGO_URI)
        console.log('Conexion exitosa con la base de datos')
    }catch(err){
        console.error('Error: ' + err.message);
    }
}