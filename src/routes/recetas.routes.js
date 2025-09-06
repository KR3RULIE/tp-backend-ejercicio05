import { Router } from "express";
import {
  crearReceta,
  leerRecetas,
  leerRecetaID,
  borrarReceta,
  editarReceta,
} from "../controllers/recetas.controllers.js";
import validarReceta from "../middleware/validarRecetas.js";

const router = Router();

router.route("/").get(leerRecetas).post(validarReceta, crearReceta);
router
  .route("/:id")
  .get(leerRecetaID)
  .delete(borrarReceta)
  .put(validarReceta, editarReceta);

export default router;
