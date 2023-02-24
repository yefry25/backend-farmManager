import mongoose from 'mongoose';

const loteSchema = new mongoose.Schema(
    {
        tipo: {
            type:mongoose.Schema.Types.ObjectId,
            ref:'TipoProducto',
            required: true
        },
        edad: {
            type:Number
        },
        abono: {
            tipo:{
                type:String,
            },
            quimico:{
                type:Number
            },
            organico:{  
                type:Number
            },
            costo:{
                type:Number
            }
        },
        jornales:{
            tipo:{
                type:String
            },
            obrero:{
                type:mongoose.Schema.Types.ObjectId,
                ref:'Usuario',
                required:true
            },
            costo:{
                type:Number
            }
        },
    },
    {
        timestamps: true,
        versionKey: false,  
    }
)

export default mongoose.model('Lote',loteSchema)