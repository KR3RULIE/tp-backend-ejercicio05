import Usuario from "../models/usuario.js";
import bcrypt from "bcrypt";
import generarJWT from "../helpers/generarJWT.js";

export const leerUsuarios = async (req, res) => {
  try {
    const listaUsuarios = await Usuario.find();
    res.status(200).json(listaUsuarios);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al leer los usuarios" });
  }
};

export const crearUsuario = async (req, res) => {
  try {
    const { nombreUsuario, email, pw } = req.body;
    //hashear el password
    const saltos = bcrypt.genSaltSync(10);
    const passwordHash = bcrypt.hashSync(pw, saltos);

    const nuevoUsuario = new Usuario({
      nombreUsuario,
      email,
      pw: passwordHash,
    });
    await nuevoUsuario.save();
    //4- enviar respuesta
    res.status(201).json({
      mensaje: `El usuario: ${nuevoUsuario.nombreUsuario} fue registrado exitosamente`,
    });
  } catch (error) {
    if (error.code === 11000) {
      // Error de duplicado en Mongo (email ya registrado)
      return res.status(409).json({ message: "El email ya está registrado" });
    }
    console.error(error);
    res.status(500).json({ mensaje: "Error al crear el usuario" });
  }
};

export const login = async (req, res) => {
  try {
    // 1 verificar que el email exista, si no existe enviar un error
    const { email, pw } = req.body;
    const usuarioExistente = await Usuario.findOne({ email });
    if (!usuarioExistente) {
      return res.status(404).json({ mensaje: "No se encontro el usuario" });
    }
    // 2 si existe el mail, verificar que el password sea correcto, si el password no es el mismo, enviar un mensaje error
    const passwordCorrecto = bcrypt.compareSync(pw, usuarioExistente.pw);
    if (!passwordCorrecto) {
      return res.status(401).json({ mensaje: "Credenciales inválidas" });
    }
    // 3 generar el token
    const token = await generarJWT(
      usuarioExistente.nombreUsuario,
      usuarioExistente.email
    );
    // 4 enviar la respuesta al frontend
    res.status(200).json({
      mensaje: "Login exitoso",
      nombreUsuario: usuarioExistente.nombreUsuario,
      token,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al logear en el usuario" });
  }
};
