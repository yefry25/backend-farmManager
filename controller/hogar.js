import Hogar from "../model/hogar.js";

const hogar = {
    crearHogar :(req,res) => {
        const {servicio}=req.body

        try {
            const hogar = new Hogar({servicio})
            if(!hogar){
                return res.staus(400).json({msg:"No se pudo crear el servicio de hogar"})
            }
            hogar.save();
            res.json({hogar})
        } catch (error) {
            return res.status(500).json({msg:"Hable con el WebMaster"})
        }
    }
}

export default hogar