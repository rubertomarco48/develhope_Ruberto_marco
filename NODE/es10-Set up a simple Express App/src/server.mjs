import 'dotenv/config'
import  express  from "express";
import bodyParser from 'body-parser';


let planets = [
  { id: 1, name: 'Earth', type: 'Terrestrial' },
  { id: 2, name: 'Mars', type: 'Terrestrial' },
  { id: 3, name: 'Jupiter', type: 'Gas Giant' },
];

const port =process.env.port;
const host = process.env.host;
const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  console.log(`Received ${req.method} request from ${req.ip} to ${req.path}`);
  next();
});

app.get('/planets', (req, res) => {
  res.json(planets);
});

app.listen(port,(()=>console.log(`the server is running to ${host}${port}/`)))