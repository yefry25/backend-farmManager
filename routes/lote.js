import Router from "express";
import {check} from "express-validator";
import validarCampos from "../middleware/middleware.js";
import lote from "../controller/lote.js"
import validar from "../middleware/validar.js";

const router = new Router();

router.post('/',[
    check('tipo','El campo tipo de cultivo no puede estar vacio').not().isEmpty(), 
    check('edad','El campo edad del cultivo no puede estar vacio').not().isEmpty(), 
    check('abono','El campo abono no puede estar vacio').not().isEmpty(), 
    check('jornales','El campo jornales no puede estar vacio').not().isEmpty(), 
    validarCampos
],lote.crearLote)

export default router