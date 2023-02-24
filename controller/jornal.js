import Jornal from "../model/jornal.js";

const jornal = {
    crearJornal : async (req,res) => {
        const {cantidad}=req.body

        try {
            const jornal = new Jornal({cantidad});
            if(!jornal){
                res.status(400).json({msg:"No se pudo crear el jornal"})
            }
            jornal.save();
            res.json({jornal})
            
        } catch (error) {
            return res.status(500).json({msg:"Hable con el WebMaster"})
        }
    }
}

export default jornal