import mongoose from 'mongoose';

const tipoSchema = new mongoose.Schema(
    {
        cafe:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'Coffe'
        },
        maiz:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'Maiz'
        },
        platano:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'Platano'
        },
        naranja:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'Naranja'
        },
        banano:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'Banano'
        },
        guamos:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'Guamos'
        }
    },
    {
        timestamps: true,
        versionKey: false,
    }
)

export default mongoose.model('TipoProducto', tipoSchema)