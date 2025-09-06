import Receta from "../models/receta.js";

export const leerRecetas = async (req, res) => {
  try {
    const listaRecetas = await Receta.find();
    res.json(listaRecetas);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al intentar leer las recetas" });
  }
};

export const leerRecetaID = async (req, res) => {
  try {
    const recetaBuscado = await Receta.findById(req.params.id);
    if (!recetaBuscado) {
      return res.status(404).json({ mensaje: "Receta no encontrado" });
    }
    res.status(200).json(recetaBuscado);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al encontrar la receta" });
  }
};

export const crearReceta = async (req, res) => {
  try {
    const nuevaReceta = new Receta(req.body);
    await nuevaReceta.save();
    res.status(201).json({
      mensaje: `La receta ${nuevaReceta.titulo} fue creada con exito`,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al intentar crear la receta" });
  }
};

export const editarReceta = async (req, res) => {
  try {
    const recetaEditada = await Receta.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    if (!recetaEditada) {
      return res.status(404).json({ mensaje: "Receta no encontrado" });
    }
    res.status(200).json({ mensaje: `La receta fue editada con exito` });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al editar la receta" });
  }
};

export const borrarReceta = async (req, res) => {
  try {
    const recetaBorrada = await Receta.findByIdAndDelete(req.params.id);
    if (!recetaBorrada) {
      return res.status(404).json({ mensaje: "Receta no encontrado" });
    }
    res.status(200).json({ mensaje: `La receta fue borrada con exito` });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al borrar la receta" });
  }
};
