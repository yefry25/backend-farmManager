import mongoose from 'mongoose';

const abonoSchema = new mongoose.Schema(
    {
        costoAbonoLevante: {
            type: Number
        },
    }
)

export default mongoose.model('Abono', abonoSchema)