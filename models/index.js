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

// liste des rôles possibles
db.ROLES = ["user", "admin", "moderator"];

module.exports = db;
