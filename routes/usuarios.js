import { Router } from "express"
import { check } from "express-validator"
import user from "../controller/usuarios.js"
import validarCampos from "../middleware/middleware.js"

const router = new Router()

router.post('/agregar',[
    /* check('documento','No puede estar vacio').not().isEmpty(),
    check('nombre','No puede estar vacio').not().isEmpty(),
    check('telefono','No puede estar vacio').not().isEmpty(),
    check('correo','No puede estar vacio').not().isEmpty(),
    check('correo','Debe tener formato correo').isEmail(),
    check('rol','No puede estar vacio').not().isEmpty(),
    validarCampos */
],user.usuarioPost)

export default router