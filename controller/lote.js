import Lote from "../model/lote.js";

const lote = {
    crearLote: async (req, res) => {
        const { tipo, edad, abono, jornales } = req.body

        try {
            const lote = new Lote({ tipo, edad, abono, jornales });
            if (!lote) {
                return res.status(400).json({ msg: 'No se pudo crear el lote' })
            }
            lote.save();
        } catch (error) {
            return res.status(500).json({ msg: "Hable con el WebMaster" })
        }
    }
}

export default lote