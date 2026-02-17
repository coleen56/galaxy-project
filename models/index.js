// db.js
const config = require("../config/db.config.js");
const { Sequelize, DataTypes } = require("sequelize");

// instance de sequelize
const sequelize = new Sequelize(
    config.DB,
    config.USER,
    config.PASSWORD,
    {
        host: config.HOST,
        dialect: config.dialect,
        pool: {
            max: config.pool.max,
            min: config.pool.min,
            acquire: config.pool.acquire,
            idle: config.pool.idle
        },
    }
);

const db = {};

// export sequelize + instance
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// import des modèles
db.user = require("../models/user.model.js")(sequelize, DataTypes);
db.role = require("../models/role.model.js")(sequelize, DataTypes);
db.refresh_token = require("../models/refresh_token.model")(sequelize, DataTypes);
db.trip = require("../models/trip.model.js")(sequelize, DataTypes);
db.planet = require("../models/planet.model.js")(sequelize, DataTypes);
db.planetarySystem = require("../models/planetarySystem.model.js")(sequelize, DataTypes);
db.galaxy = require("../models/galaxy.model.js")(sequelize, DataTypes);

// many to many user <=> roles
db.user.belongsToMany(db.role, {
    through: "user_roles",
    foreignKey: "user_id",
    otherKey: "role_id"
});

db.role.belongsToMany(db.user, {
    through: "user_roles",
    foreignKey: "role_id",
    otherKey: "user_id"
});

// one to one user <=> refresh token

db.refresh_token.hasOne(db.user, {
    foreignKey: "user_id",
    as: "user"
})

db.user.hasOne(db.refresh_token, {
    foreignKey: "refresh_token_id",
    as: "refresh_token"
})

// many to many user <=> trip
db.user.belongsToMany(db.trip, {
    through: "user_trip",
    foreignKey: "user_id",
    otherKey: "trip_id"
});

db.trip.belongsToMany(db.user, {
    through: "user_trip",
    foreignKey: "trip_id",
    otherKey: "user_id"
});

// one to many trajet <=> planète de départ
db.trip.hasOne(db.planet, {
    foreignKey: "departure_planet_id",
    as: 'departure_planet'
})

// one to many trajet <=> planète d'arrivée'
db.trip.hasOne(db.planet, {
    foreignKey: "arrival_planet_id",
    as: 'arrival_planet'
})

// many to one planète départ <=> trajet
db.planet.hasMany(db.trip, {
    foreignKey: "departure_planet_id",
    as: "departing_trips"
})

// many to one planète arrivée <=> trajet
db.planet.hasMany(db.trip, {
    foreignKey: "arrival_planet_id",
    as: "arriving_trips"
})

// one to many planetarySystem <=> planet
db.planetarySystem.hasMany(db.planet, {
    foreignKey: "planetary_system_id",
    as: "planets"
})

db.planet.belongsTo(db.planetarySystem, {
    foreignKey: "planetary_system_id",
    as: "planetary_system"
})

// one to many galaxy <=> planetarySystem
db.galaxy.hasMany(db.planetarySystem, {
    foreignKey: "galaxy_id",
    as: "planetary_systems"
})

db.planetarySystem.belongsTo(db.galaxy, {
    foreignKey: "galaxy_id",
    as: "galaxy"
})

// liste des rôles possibles
db.ROLES = ["user", "admin", "moderator"];

module.exports = db;