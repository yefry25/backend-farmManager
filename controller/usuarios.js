import bcryptjs from "bcryptjs";
import Usuario from "../model/usuarios.js";

const user = {
    usuarioPost: async () => {
        try {
            const { documento, nombre, telefono, correo, rol } = req.body;
            let pass = documento

            const usuario = new Usuario({ documento, nombre, telefono, correo, password: pass, rol });

            try {
                const salt = bcryptjs.genSaltSync(10);
                usuario.password = bcryptjs.hashSync(pass, salt);
            } catch (error) {
                return res.status(500).json({ msg: "No se pudo encriptar la contraseña" })
            }

            if (!usuario) {
                return res.status(400).json({ msg: "no se pudo registrar el cliente" });
            }
            usuario.save();

        } catch (error) {
            return res.status(500).json({msg:"Hable con el WebMaster"})
        }
    },
};

export default user;
