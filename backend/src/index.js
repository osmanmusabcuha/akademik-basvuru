import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

import authRouter from "./routes/auth.routes.js";
import userRouter from "./routes/user.routes.js";
import facultyRouter from "./routes/faculty.routes.js";
import postingRouter from "./routes/posting.routes.js";
import applicationRouter from "./routes/application.routes.js";
import documentsRouter from "./routes/documents.routes.js";
import juryRouter from "./routes/jury.routes.js";
import evaluationRouter from "./routes/evaluation.routes.js";
import questionRouter from "./routes/question.routes.js";
import answersRouter from "./routes/answers.routes.js";

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/faculties", facultyRouter);
app.use("/api/postings", postingRouter);
app.use("/api/applications", applicationRouter);
app.use("/api/documents", documentsRouter);
app.use("/api/juries", juryRouter);
app.use("/api/evaluations", evaluationRouter);
app.use("/api/questions", questionRouter);
app.use("/api/answers", answersRouter);

app.get("/", (req, res) => {
  res.send("Merhaba, Express uygulaması çalışıyor!");
});

app.listen(port, () => {
  console.log(`Sunucu http://localhost:${port} adresinde çalışıyor.`);
});
