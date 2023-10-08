import pgPromise from "pg-promise";
import multer from "multer";
const upload = multer();


const db =pgPromise()("postgres://postgres:ciaook10@localhost:5432/video")

const setupDB=async()=>{
  const test = db.manyOrNone("SELECT * FROM pianeti")
  if (!test){
 await db.none(`DROP TABLE IF EXISTS pianeti;
               CREATE TABLE pianeti (
                  id SERIAL NOT NULL PRIMARY KEY,
                  name TEXT NOT NULL
                  image TEXT
);`) 
await db.none(`INSERT INTO pianeti (name) VALUES ('Earth')`)
await db.none(`INSERT INTO pianeti (name) VALUES ('Mars')`)
await db.none(`INSERT INTO pianeti (name) VALUES ('Mercury')`)
               }
}
setupDB()


const getOneById = async(req, res) => {
  const { id } = req.params;
  const pianeta = await db.oneOrNone(`SELECT * FROM pianeti WHERE id=$1`,Number(id))
  res.status(200).json(pianeta);
};

const getAll = async(req, res) => {
  const pianeti = await db.many(`SELECT * FROM pianeti`)
  res.status(200).json(pianeti);
};

const post = async(req, res) => {
  const { name } = req.body;
  await db.none('INSERT INTO pianeti (name) VALUES ($1)',name)
  res.status(201).json({ msg: "obj added" });
};

const putById = async(req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  await db.none('UPDATE pianeti SET name=$2 WHERE id=$1',[id,name])
  res.status(200).json({ msg: "ok" });
};



const deleteById = async(req, res) => {
  const { id } = req.params;
  await db.none(`DELETE FROM pianeti WHERE id=$1`,Number(id))
  res.status(200).json({ msg: "ok" });
};



export {db,getOneById, getAll, post, putById, deleteById };
