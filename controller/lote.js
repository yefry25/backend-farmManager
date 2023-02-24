import Lote from "../model/lote.js";
import Usuario from "../model/usuarios.js";
import Cafe from "../model/cafe.js"
import TipoProducto from "../model/tipoProducto.js"
import tipoProducto from "../model/tipoProducto.js";

const lote = {
    crearLote: async (req, res) => {
        const { tipo, edad, abono, jornales } = req.body

        try {
            const cafe = await tipoProducto.find().populate({path:'cafe'})
            const user = await Lote.find().populate({path:'jornales.obrero',populate:{path:'jornal'}})

            if(abono.quimico){
                abono.costo=abono.quimico
            }if(abono.organico){
                abono.costo=abono.organico
            }if(abono.quimico && abono.organico){
                abono.costo=abono.quimico + abono.organico
            }
            jornales.costo=user[0].jornales.obrero.jornal.cantidad
            /* console.log(cafe[0].cafe); */

            const lote = new Lote({ tipo, edad, abono, jornales });
            if (!lote) {
                return res.status(400).json({ msg: 'No se pudo crear el lote' })
            }
            lote.save();
            res.json({lote}) 
        } catch (error) {
            return res.status(500).json({ msg: "Hable con el WebMaster" })
        }
    }
}

export default lote