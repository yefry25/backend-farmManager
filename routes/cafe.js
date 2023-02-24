import Router from "express";
import {check} from "express-validator";
import validarCampos from "../middleware/middleware.js"
import lote from "../controller/cafe.js"

const router = new Router();
 
router.post('/',[
    check('conteo','El campo conteo no puede estar vacio').not().isEmpty(),
    check('conteo','El campo conteo debe ser numérico').isNumeric(),
    check('cereza','El campo cereza no puede estar vacio').not().isEmpty(),
    check('cereza','El campo cereza debe ser numérico').isNumeric(),
    check('seco','El campo seco no puede estar vacio').not().isEmpty(),
    check('seco','El campo seco debe ser numérico').isNumeric(),
    check('costoSemillero','El campo costo del semillero no puede estar vacio').not().isEmpty(),
    check('costoSemillero','El campo costo del semillero debe ser numérico').isNumeric(),
    validarCampos
],lote.ingresarCafe)
  
export default router