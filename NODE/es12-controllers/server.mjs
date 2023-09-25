import express from "express";
import "dotenv/config";
import morgan from "morgan";
import {
  deleteById,
  getAll,
  getOneById,
  post,
  putById,
} from "./controller/planetController.mjs";
const port = process.env.port;
const host = process.env.host;
const app = express();

app.use(express.json());
app.use(morgan("dev"));

app.get("/api/planets/:id", getOneById);
app.get("/api/planets", getAll);

app.post("/api/planets", post);

app.put("/api/planets/:id", putById);

app.delete("/api/planets/:id", deleteById);


app.listen(port, () => console.log(`the server running to ${host}`));
