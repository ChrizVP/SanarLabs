import express from "express";
import morgan from "morgan";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// app.use("/api/authUser", auth);

app.use(morgan("dev"));

export default app;
