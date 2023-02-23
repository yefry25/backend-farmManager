import mongoose from "mongoose";

const camuroSchema = new mongoose.Schema(
    {
        kilosCamuro:{
            type: Number,
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

export default mongoose.model('Camuro',camuroSchema)