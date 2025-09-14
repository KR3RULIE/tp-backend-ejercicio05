import { Router } from "express";
import {
  crearReceta,
  leerRecetas,
  leerRecetaID,
  borrarReceta,
  editarReceta,
} from "../controllers/recetas.controllers.js";
import validarReceta from "../middleware/validarRecetas.js";
import verificarJWT from "../middleware/verificarJWT.js";

const router = Router();

router
  .route("/")
  .get(leerRecetas)
  .post([verificarJWT, validarReceta], crearReceta);
router
  .route("/:id")
  .get(leerRecetaID)
  .delete(verificarJWT, borrarReceta)
  .put([verificarJWT, validarReceta], editarReceta);

export default router;
