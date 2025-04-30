import express from "express";
import cors from "cors";
import "dotenv/config";
import router from "./routes/routes";
import cookieParser from "cookie-parser";

const app = express();

app.use(cookieParser());
app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:8080"],
    credentials: true,
  })
);
app.use(express.json());
app.use("/api", router);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`listening on port: ${PORT}`));
