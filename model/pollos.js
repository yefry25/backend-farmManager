import mongoose from 'mongoose';

const polloSchema = new mongoose.Schema(
    {
        tipo: {
            type: String,
            required: true,
            unique: true
        },
        conteo:{
            type: Number,
            required: true,
        },
        kilosPolloEngorde:{
            type: Number,
        },
        kilosPolloCriollo:{
            type: Number,
        },
        huevosTotal:{
            type: Number,
        },
        costoMedicamento: {
            type: Number,
        },
        costoComida: {
            type: Number,
        },
        costoTotal:{
            type: Number,
        },
        ganancias:{
            type: Number,
        }
    },
    {
        timestamps: true,
        versionKey: false,  
    }
)

export default mongoose.model('Pollo',polloSchema)