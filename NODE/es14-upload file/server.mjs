import express from "express";
import "dotenv/config";
import morgan from "morgan";
import multer from "multer"
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
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Specifica la cartella dove verranno memorizzati i file caricati
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname); // Genera un nome unico per il file
  },
});

const upload = multer({ storage: storage });


app.use(express.json());
app.use(morgan("dev"));

app.get("/planets/:id", getOneById);
app.get("/planets", getAll);

app.post("/planets", post);

app.put("/planets/:id", putById);

app.delete("/planets/:id", deleteById);

app.post('/upload', upload.single('image'), (req, res) => {
  // La proprietà 'image' è il nome del campo file nell'HTML
  // req.file contiene i dettagli del file caricato, ad esempio il nome del file, il tipo, ecc.
  if (!req.file) {
    return res.status(400).json({ message: 'Nessun file caricato' });
  }

  res.status(200).json({ message: 'File caricato con successo' });
});


app.listen(port, () => console.log(`the server running to ${host}`));
