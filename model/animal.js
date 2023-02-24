import mongoose from 'mongoose';

const animalSchema = new mongoose.Schema(
    {
        tipo: {
            type: String,
            required: true
        },
        kilos:{
            type:Number
        },
        conteo:{
            type: Number
        },
        costoMedicamento: {
            type: Number,
        },
        costoComida: {
            type: Number,
        },
        costoTotal: {
            type: Number,
            default: 0
        },
        ganancias:{
            type: Number,
            default: 0
        }
    },
    {
        timestamps: true,
        versionKey: false,  
    }
)

export default mongoose.model('Animal', animalSchema)