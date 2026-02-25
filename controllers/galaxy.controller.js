const { where } = require("sequelize");
const db = require("../models");
const Galaxy = db.galaxy;

exports.findAll = (req, res) => {
  Galaxy.findAll()
    .then((galaxies) => res.json(galaxies))
    .catch((err) => res.status(500).json({ message: err.message }));
};

exports.findById = (req, res) => {
  Galaxy.findByPk(req.params.id)
    .then((galaxy) => {
      if (!galaxy)
        return res.status(404).json({ message: "Galaxie introuvable" });
      res.json(galaxy);
    })
    .catch((err) => res.status(500).json({ message: err.message }));
};

exports.create = (req, res) => {
  Galaxy.create(req.body)
    .then((galaxy) => res.status(201).json(galaxy))
    .catch((err) => res.status(400).json({ message: "Un problème est survenu" }));
};

exports.delete = (req, res) => {
  Galaxy.destroy({
    where: {id: req.params.id}
  })
  .then(() =>res.status(200).json({message: "La galaxy a bien été supprimée"}))
  .catch(() => res.status(500).json({message: "Un problème est survenu"}));
};
