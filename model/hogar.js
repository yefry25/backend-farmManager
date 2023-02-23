import mongoose from 'mongoose';

const hogarSchema = new mongoose.Schema(
    {
        servicio:{
            tipo:{
                type:String,
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

export default mongoose.model('Hogar', hogarSchema)