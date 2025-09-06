import { Router } from "express";
import {
  crearUsuario,
  leerUsuarios,
} from "../controllers/usuarios.controllers";
import validacionUsuario from "../middleware/validarUsuario";

const router = Router();

router.get("/").get(leerUsuarios).post(validacionUsuario, crearUsuario);

export default router;
