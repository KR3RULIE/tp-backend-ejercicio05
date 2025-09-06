import mongoose, { Schema } from "mongoose";

const recetasSchema = new Schema({
  titulo: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 100,
    unique: true,
  },
  descripcion: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 255,
  },
  ingredientes: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 2500,
  },
});

const Receta = mongoose.model("receta", recetasSchema);

export default Receta;
