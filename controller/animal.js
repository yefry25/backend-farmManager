import Animal from "../model/animal.js"

const animal = {
    crearAnimal : async (req,res) => {
        const {tipo,kilos,conteo,costoMedicamento,costoComida}=req.body

        try {
            const animal = new Animal({tipo,kilos,conteo,costoMedicamento,costoComida});
            if(!animal){
                return res.status(400).json({msg:"No se pudo registrar el animal"})
            }
            animal.save()
            res.json({animal})
        } catch (error) {
            return res.status(500).json({msg:"Hable con el WebMaster"})
        }
    }
}

export default animal