import Router from "express";
import {check} from "express-validator";
import validarCampos from "../middleware/middleware.js";
import animal from "../controller/animal.js";

const router = new Router();

router.post('/',[
    check('tipo','El campo tipo de anima no puede estar vacio').not().isEmpty(),
    check('tipo','El campo debe ser textual').isString(),
    check('kilos','El campo kilos vendido no puede estar vacio').not().isEmpty(),
    check('kilos','El campo kilos debe ser numérico').isNumeric(),
    check('conteo','El campo conteo no puede estar vacio').not().isEmpty(),
    check('conteo','El campo conteo debe ser numérico').isNumeric(),
    check('costoMedicamento','El campo costo medicamento no puede estar vacio').not().isEmpty(),
    check('costoMedicamento','El campo costoMedicamento debe ser numérico').isNumeric(),
    check('costoComida','El campo costo comida no puede estar vacio').not().isEmpty(),
    check('costoComida','El campo costo comida debe ser numérico').isNumeric(),
    validarCampos
],animal.crearAnimal)

export default router