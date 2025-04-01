import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret";

export const authenticateToken = (req, res, next) => {
  const authHeader = req.headers.authorization; // Authorization başlığını al

  if (!authHeader) {
    return res.status(401).json({ message: "Token gerekli" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(403).json({ message: "Geçersiz token" });
  }
};
