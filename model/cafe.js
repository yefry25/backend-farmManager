import mongoose from "mongoose";

const cafeSchema = new mongoose.Schema(
    {
        conteo: {
            type: Number,
            required: true
        },
        cereza: {
            type: Number
        },
        seco: {
            type: Number
        },
        costoSemillero: {
            type: Number,
        }
    },
    {
        timestamps: true,
        versionKey: false,  
    }
)

export default mongoose.model('Coffee', cafeSchema)