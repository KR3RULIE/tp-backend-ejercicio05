import { body } from "express-validator";
import resultadoValidacion from "./resultadoValidacion.js";
import Receta from "../models/receta.js";

const validarReceta = [
  body("titulo")
    .notEmpty()
    .withMessage("El título es obligatorio")
    .isLength({ min: 2, max: 100 })
    .withMessage("El título debe tener entre 2 y 100 caracteres")
    .custom(async (value) => {
      const receta = await Receta.findOne({ titulo: value });
      if (!receta) return true;
      if (req.params.id && receta._id.toString() === req.params.id) return true;
      throw new Error("Ya existe una receta con este título");
    }),
  body("descripcion")
    .notEmpty()
    .withMessage("La descripción es obligatoria")
    .isLength({ min: 2, max: 255 })
    .withMessage("La descripción debe tener entre 2 y 255 caracteres"),
  body("ingredientes")
    .notEmpty()
    .withMessage("Los ingredientes son obligatorios")
    .isLength({ min: 2, max: 2500 })
    .withMessage(
      "La descripción de ingredientes debe tener entre 2 y 2500 caracteres"
    ),
  (req, res, next) => resultadoValidacion(req, res, next),
];

export default validarReceta;
