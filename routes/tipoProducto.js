import Router from "express";
import {check} from "express-validator";
import validarCampos from "../middleware/middleware.js";
import tipo from "../controller/tipoProducto.js"

const router = new Router();

router.post('/',tipo.crearTipo)

export default router