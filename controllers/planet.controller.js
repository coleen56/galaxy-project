const models = require("../models");
const planet = models.planet;

exports.create = (req, res) => {
    planet.create(req.body)
    .then((planet) => res.status(201).json(planet))
    .catch((err) => res.status(400).json({message: "Une erreur est survenu"}));
};

exports.findAll = (req, res) => {
    planet.findAll()
    .then((planets) => res.json(planets))
    .catch((err) => res.status(500).json({message: "Une erreur est survenu"}));
};

exports.findById = (req, res) => {
    planet.findByPk(req.params.id)
    .then((planet) => {
        if (!planet) {
            return res.status(400).json({message: "La planète est introuvable"})
        }
        res.json(planet);
    })
    .catch((err) => res.status(500).json({message: "Une erreur est survenu"}));
};

exports.delete = (req, res) => {
    planet.destroy({
        where: {id: req.params.id}
    })
    .then(() => res.status(200).json({message: "La planète a bien été supprimée"}))
    .catch(() => res.status(500).json({message: "Un problème est survenu"}));
};
