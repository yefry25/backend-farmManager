import TipoProducto from "../model/tipoProducto.js";

const tipo = {
    crearTipo : async (req, res) => {
        const {cafe,maiz,platano,naranja,banano,guamos}= req.body;
        try {
            const tipo = new TipoProducto({cafe,maiz,platano,naranja,banano,guamos})
            if(!tipo){
                return res.status(500).json({msg:"No se pudo generar el tipo de producto"})
            }
            tipo.save()
            res.json({tipo})
            
        } catch (error) {
            return res.status(500).json({msg:"Hable con el WebMaster"})
        }
    }
}

export default tipo