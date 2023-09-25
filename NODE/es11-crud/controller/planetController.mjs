import pgPromise from "pg-promise";
import Joi from "joi";

const schemaPianeti = Joi.object({
  id: Joi.number().integer().required(),
  name: Joi.string().required(),
  type:Joi.string().required(),
})

let pianeti = [
  { id: 1, name: "Mars", type: "Terrestrial" },
  { id: 2, name: "Venus", type: "Terrestrial" },
  { id: 3, name: "Mercury", type: "Terrestrial" },
  { id: 4, name: "Earth", type: "Terrestrial" },
];



const getOneById = (req, res) => {
  const { id } = req.params;
  const pianeta = pianeti.find((p) => p.id === Number(id));
  res.status(200).json(pianeta);
};

const getAll = (req, res) => {
  res.status(200).json(pianeti);
};

const post = (req, res) => {
  const { id, name, type } = req.body;
  const nuovoPianeta = { id, name, type };
  const validate = schemaPianeti.validate(nuovoPianeta)
  if (validate.error) {
    return res.status(400).json({msg: validate.error.details[0].message})
  }else{
    pianeti = [...pianeti, nuovoPianeta];
    res.status(201).json({ msg: "a new planet has been added to the solar system" });
  }
  
};

const putById = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  pianeti = pianeti.map((p) =>
    p.id === Number(id) ? (p = { ...p, name: name }) : p
  );
  res.status(200).json({ msg: "ok,the planet has changed its name" });
};

const deleteById = (req, res) => {
  const { id } = req.params;
  pianeti = pianeti.filter((p) => p.id !== Number(id));
  res.status(200).json({ msg: "ok,the planet was destroyed" });
};

export { getOneById, getAll, post, putById, deleteById };
