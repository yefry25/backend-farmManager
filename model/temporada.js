import mongoose from 'mongoose';

const temporadaSchema = new mongoose.Schema(
    {
        obrero: {
            type: mongoose.Schema.ObjectId,
            ref: 'Usuario',
            required: true
        },
        kilosCafe: {
            type: Number,
            required: true
        }
    },
    {
        timestamps: true,
        versionKey: false,  
    }
)

export default mongoose.model('Temporada',temporadaSchema)