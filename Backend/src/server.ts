import "reflect-metadata";
import path from "path";
import express from "express";
import "./database";
import cors from "cors";

import { routes } from "./routes";

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use("/uploads", express.static(path.join(__dirname, "..", "uploads")))

app.listen(3000);