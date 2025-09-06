import recetasRoutes from "./recetas.routes.js";
import usuarioRoutes from "./usuarios.routes.js";
import { Router } from "express";

const router = Router();

router.route("/recetas", recetasRoutes);
router.route("/usuarios", usuarioRoutes);

export default router;
