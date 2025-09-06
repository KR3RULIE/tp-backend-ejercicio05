import { Router } from "express";
import {
  crearReceta,
  leerRecetas,
  leerRecetaID,
  borrarReceta,
  editarReceta,
} from "../controllers/recetas.controllers.js";
import validarReceta from "../middleware/validarRecetas";

const router = Router();

router.use("/").get(leerRecetas).post(validarReceta, crearReceta);
router
  .use("/:id")
  .get(leerRecetaID)
  .delete(borrarReceta)
  .put(validarReceta, editarReceta);

export default router;
