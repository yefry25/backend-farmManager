import Router from "express";
import {check} from "express-validator";
import validarCampos from "../middleware/middleware.js";
import hogar from "../controller/hogar.js";

const router = new Router();

router.post('/',[
    check('servicio','El campo servicio no puede estar vacio').not().isEmpty(),
    validarCampos
],hogar.crearHogar)

export default router