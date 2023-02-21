import jwt from "jsonwebtoken";
import Usuario from "../model/usuarios.js"

const validar = {

    generarJWT: (uid) => {
        
        /* return new Promise((resolve, reject) => {
            const payload = { uid };
            jwt.sign(payload, process.env.CLAVESECRET, {
                expiresIn: "4h"//4h
            }, (err, token) => { 
                if (err) {
                    console.log(err);
                    reject("No se pudo generar el token")
                } else {
                    resolve(token)
                }
            })
        }) */

        const payload = { uid };
        const tok = jwt.sign(payload, process.env.CLAVESECRET, {
            expiresIn: "4h"//4h
        })
        return tok
    },
}

export default validar