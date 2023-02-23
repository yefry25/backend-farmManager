import Cafe from "../model/cafe.js"

const cafe = {
    ingresarCafe:async(req,res)=>{
        const {conteo,cereza,seco,costoSemillero,costoSembrada,costoAbonoLevante}=req.body

        try {
            const cafe = new Cafe({conteo,cereza,seco,costoSemillero,costoSembrada,costoAbonoLevante})
            if(!cafe){
                return res.status(400).json({msg:"No se pudo registrar el café"})

            }
            cafe.save();
            
        } catch (error) {
            return res.status(500).json({msg:"Hable con el WebMaster"})
        }
    },
}

export default cafe 