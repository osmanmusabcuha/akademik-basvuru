import express from "express";
import cookieParser from "cookie-parser";

import { authenticateToken } from "./middleware/auth.middleware.js";
import { authorizeRoles } from "./middleware/role.middleware.js";

import authRouter from "./routes/auth.routes.js";
import userRouter from "./routes/user.routes.js";
import facultyRouter from "./routes/faculty.routes.js";

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/faculties", facultyRouter);

app.get("/", (req, res) => {
  res.send("Merhaba, Express uygulaması çalışıyor!");
});

app.listen(port, () => {
  console.log(`Sunucu http://localhost:${port} adresinde çalışıyor.`);
});
