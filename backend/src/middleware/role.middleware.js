export const authorizeRoles = (...allowedRoles) => {
  return (req, res, next) => {
    const userRole = req.user.role;
    console.log(userRole);

    if (!userRole) {
      return res.status(401).json({ message: "Yetkisiz erişim" });
    }

    if (!allowedRoles.includes(userRole)) {
      return res.status(403).json({ message: "Yetkisiz erişim" });
    }

    next();
  };
};
