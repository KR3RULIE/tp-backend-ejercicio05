import mongoose, { Schema } from "mongoose";

const recetasSchema = new Schema({
  titulo: {
    type: String,
    required: true,
    minLenghth: 2,
    maxLength: 100,
  },
  descripcion: {
    type: String,
    required: true,
    minLenghth: 2,
    maxLength: 255,
  },
  ingredientes: {
    type: String,
    required: true,
    minLenghth: 2,
    maxLength: 2500,
  },
});

const Receta = mongoose.model("receta", recetasSchema);

export default Receta;
