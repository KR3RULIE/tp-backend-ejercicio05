import jwt from "jsonwebtoken";

const verificarJWT = (req, res, next) => {
  try {
    const token = req.header("x-token");
    if (!token) {
      return res.status(401).json({ mensaje: "No hay token en la petición" });
    }
    const payload = jwt.verify(token, process.env.SECRET_JWT);
    req.nombreUsuario = payload.nombreUsuario;
    req.email = payload.email;
    next();
  } catch (error) {
    console.error(error);
    res.status(401).json({ mensaje: "Token inválido", error: error.message });
  }
};

export default verificarJWT;
