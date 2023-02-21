import bcryptjs from "bcryptjs";
import ip from "ip";
import Usuario from "../model/usuarios.js";
import validar from "../middleware/validar.js";

const user = {
    usuarioPost: async (req, res) => {
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
            res.json({ usuario })
        } catch (error) {
            return res.status(500).json({ msg: "Hable con el WebMaster" })
        }
    },

    usuarioLogin: async (req, res) => {

        const { correo, password } = req.body;
        try {
            const usuario = await Usuario.findOne({ correo });
            if (!usuario) {
                return res.status(400).json({
                    msg: "Usuario / Password no son correctos",
                });
            }
            if (usuario.estado == 0) {
                return res.status(400).json({
                    msg: "Usuario inactivo",
                });
            }

            const validPassword = bcryptjs.compareSync(password, usuario.password);
            if (!validPassword) {
                return res.status(400).json({
                    msg: "Usuario / Password no son correctos",
                });
            }

            let token=""
            try {
                token = await validar.generarJWT(usuario.id);
            } catch (error) {
                return res.status(500).json({msg:"Error al crear el token"})
            }
            
            const navegador = req.headers['user-agent']
            /* const ip = req.socket.remoteAddress */
            const ipAdd = ip.address();
            console.log("token: "+token);
            /* try {
                const idPerson = usuario._id;
                const observacion = `Inicio de sesión realizado por ${usuario.nombre} en el navegador ${navegador} con la ip ${ipAdd}`;
                helperBitacora.llenarBitacora(idPerson, observacion);
            } catch (error) {
                return res.status(500).json({ msg: "No se pudo crear el registro de bitacora" })
            } */

            res.json({
                usuario,
                token,
                ipAdd,
                navegador
            });

        } catch (error) {
            return res.status(500).json({
                msg: "Hable con el WebMaster",
            });
        }
    }
}


export default user;
