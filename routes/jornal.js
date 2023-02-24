import Router from "express";
import {check} from "express-validator";
import validarCampos from "../middleware/middleware.js";
import jornal from "../controller/jornal.js"

const router = new Router();

router.post('/',[
    check('cantidad','El campo cantidad no puede estar vacio').not().isEmpty(),
    check('cantidad','El campo cantidad debe ser numérico').isNumeric(),
    validarCampos
],jornal.crearJornal)

export default router