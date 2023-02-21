import { Router } from "express"
import { check } from "express-validator"
import user from "../controller/usuarios.js"
import validarCampos from "../middleware/middleware.js"
import validar from "../middleware/validar.js"

const router = new Router()

router.post('/agregar',[
    check('documento','No puede estar vacio').not().isEmpty(),
    check('nombre','No puede estar vacio').not().isEmpty(),
    check('telefono','No puede estar vacio').not().isEmpty(),
    check('correo','No puede estar vacio').not().isEmpty(),
    check('correo','Debe tener formato correo').isEmail(),
    check('rol','No puede estar vacio').not().isEmpty(),
    validarCampos
],user.usuarioPost)

router.post('/login',[
    check('correo','El campo correo debe ser de caracter email').isEmail(),
    check('correo','El campo correo no puede estar vacio').not().isEmpty(),
    check('password','El campo password no puede estar vacio').not().isEmpty(),
    check('password','El campo correo debe tenermínimo 6 carácteres').isLength({min:6}),
    validarCampos
],user.usuarioLogin)

export default router