import recetasRoutes from "./recetas.routes.js";
import { Router } from "express";

const routes = Router();

routes.use("/recetas", recetasRoutes);

export default routes;
