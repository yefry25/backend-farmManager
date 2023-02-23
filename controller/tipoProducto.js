import TipoProducto from "../model/tipoProducto.js";

const tipo = {
    crearTipo : async (req, res) => {
        const {cafe,maiz,platano,naranja,bananos,guamos}= req.body;
        try {
            const tipo = new TipoProducto({cafe,maiz,platano,naranja,bananos,guamos})
            if(!tipo){
                return res.status(500).json({msg:"No se pudo generar el tipo de producto"})
            }
            tipo.save()
            
        } catch (error) {
            return res.status(500).json({msg:"Hable con el WebMaster"})
        }
    }
}

export default tipo