const models = require("../models");
const trip = models.trip;

exports.create = (req, res) => {
    trip.create(req.body)
    .then((trip) => res.json(trip))
    .catch((err) => res.status(400).json({message: "Un problème est survenu"}));
};

exports.findAll = (req, res) => {
    trip.findAll()
    .then((trips) => res.json(trips))
    .catch((err) => res.status(500).json({message: "Un problème est survenu"}));
};

exports.findById = (req, res) => {
    trip.findByPk(req.params.id)
    .then((trip) => {
        if (!trip) {
            return res.status(404).json({message: "Le voyage est introuvable"});
        }
        res.json(trip)
    })
    .catch((err) => res.status(500).json({message: "Une erreur est survenu"}));
};

exports.bookTrip = (req, res) => {
    trip.addUser()
}