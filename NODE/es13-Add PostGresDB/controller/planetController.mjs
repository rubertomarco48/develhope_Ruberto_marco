import pgPromise from "pg-promise";

const db =pgPromise()("postgres://postgres:ciaook10@localhost:5432/video")

const setupDB=async()=>{
await db.none(`DROP TABLE IF EXISTS planets;
               CREATE TABLE planets (
                  id SERIAL NOT NULL PRIMARY KEY,
                  name TEXT NOT NULL
);`)
await db.none(`INSERT INTO planets (name) VALUES ('Earth')`)
await db.none(`INSERT INTO planets (name) VALUES ('Mars')`)
await db.none(`INSERT INTO planets (name) VALUES ('Mercury')`)

}
setupDB()


const getOneById = async(req, res) => {
  const { id } = req.params;
  const pianeta = await db.oneOrNone(`SELECT * FROM planets WHERE id=$1`,Number(id))
  res.status(200).json(pianeta);
};

const getAll = async(req, res) => {
  const pianeti = await db.many(`SELECT * FROM planets`)
  res.status(200).json(pianeti);
};

const post = async(req, res) => {
  const { name } = req.body;
  await db.none('INSERT INTO planets (name) VALUES ($1)',name)
  res.status(201).json({ msg: "obj added" });
};

const putById = async(req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  await db.none('UPDATE planets SET name=$2 WHERE id=$1',[id,name])
  res.status(200).json({ msg: "ok" });
};



const deleteById = async(req, res) => {
  const { id } = req.params;
  await db.none(`DELETE FROM planets WHERE id=$1`,Number(id))
  res.status(200).json({ msg: "ok" });
};



export { getOneById, getAll, post, putById, deleteById };
