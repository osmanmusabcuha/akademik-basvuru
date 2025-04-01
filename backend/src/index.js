import express from "express";
import cookieParser from "cookie-parser";

import authRouter from "./routes/auth.routes.js";

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/api/auth", authRouter);

app.get("/", (req, res) => {
  res.send("Merhaba, Express uygulaması çalışıyor!");
});

app.listen(port, () => {
  console.log(`Sunucu http://localhost:${port} adresinde çalışıyor.`);
});
