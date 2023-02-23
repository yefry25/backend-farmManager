import mongoose from 'mongoose';

const pezSchema = new mongoose.Schema(
    {
        kilosPescado:{
            type:Number
        },
        conteo:{
            type: Number,
            required: true,
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

export default mongoose.model('Pez',pezSchema)