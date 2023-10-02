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

app.get("/planets/:id", getOneById);
app.get("/planets", getAll);

app.post("/planets", post);

app.put("/planets/:id", putById);

app.delete("/planets/:id", deleteById);


app.listen(port, () => console.log(`the server running to ${host}`));
