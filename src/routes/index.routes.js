import { Router } from "express";
import recetasRoutes from "./recetas.routes.js";
import usuarioRoutes from "./usuarios.routes.js";

const router = Router();

router.use("/recetas", recetasRoutes);
router.use("/usuarios", usuarioRoutes);

export default router;
