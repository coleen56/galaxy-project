const models = require("../models");
const planetaySystem = models.planetarySystem;

exports.create = (req, res) => {
    planetaySystem.create(req.body)
    .then((planSys) => res.status(201).json(planSys))
    .catch((err) => res.status(400).json({ message: "Un problème est survenu" }));
};

exports.findAll = (req, res) => {
    planetaySystem.findAll()
    .then((planSys) => res.json(planSys))
    .catch((err) => res.status(500).json({ message: "Un problème est survenu" }));
};

exports.findById = (req, res) => {
    planetaySystem.findByPk(req.params.id)
    .then((planSyst) => {
        if (!planSyst) {
            return res.status(404).json({message: "Le système planétaire est introuvable"});
        }
        res.json(planSyst)
    })
    .catch((err) => res.status(500).json({ message: "Un problème est survenu" }))
};

exports.delete = (req, res) => {
    planetaySystem.destroy({
        where: {id: req.params.id}
    })
    .then(() => res.status(200).json({message: "Le système planétaire a bien été supprimé"}))
    .catch(() => res.status(500).json({message: "Un problème est survenu"}));
};