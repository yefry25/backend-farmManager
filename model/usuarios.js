import mongoose from "mongoose";

const usuarioSchema = new mongoose.Schema(
    {
        documento: {
            type: String,
            required: true,
            unique: true,
        },
        nombre: {
            type: String,
            required:true
        },
        telefono:{
            type: String,
            rerquired:true
        },
        correo: {
            type:String,
            required:true
        },
        password:{
            type:String,
            required:true,
            minLength:6
        },
        rol:{
            type:String,
            required:true
        },
        estado:{
            type:String,
            required:true,
            default:1
        },
        resetToken:{
            type:String,
            default:''
        }
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

export default mongoose.model("Usuario", usuarioSchema);
