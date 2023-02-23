import mongoose from 'mongoose';

const jornalSchema = new mongoose.Schema(
    {
        cantidad:{
            type:Number,
            required:true
        }
    },
    {
        timestamps: true,
        versionKey: false,  
    }
)

export default mongoose.model('Jornal', jornalSchema)