const models = require("../models");
const trip = models.trip;
const user = models.user;

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

exports.bookTrip = async (req, res) => {
    try {
        const userId = req.body.userId;

        const tripObject = await trip.findByPk(req.body.tripId);
        if (!tripObject) {
            return res.status(404).json({ message: "Le voyage est introuvable" });
        }

        const userObject = await user.findByPk(userId);
        if (!userObject) {
            return res.status(404).json({ message: "L'utilisateur est introuvable" });
        }

        await tripObject.addUser(userObject);

        return res.status(200).json({ message: "Réservation effectuée avec succès" });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Erreur serveur" });
    }
};