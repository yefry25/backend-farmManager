import Router from "express";
import {check} from "express-validator";
import validarCampos from "../middleware/middleware.js"
import lote from "../controller/cafe.js"

const router = new Router();
 
router.post('/',[
    check('conteo','El campo conteo no puede estar vacio').not().isEmpty(),
    check('cereza','El campo cereza no puede estar vacio').not().isEmpty(),
    check('seco','El campo seco no puede estar vacio').not().isEmpty(),
    check('costoSemillero','El campo costo del semillero no puede estar vacio').not().isEmpty(),
    check('costoSembrada','El campo costo de la sembrada no puede estar vacio').not().isEmpty(),
    check('costoAbonoLevante','El campo costo del abono levante no puede estar vacio').not().isEmpty(),
    validarCampos
],lote.ingresarCafe)
  
export default router