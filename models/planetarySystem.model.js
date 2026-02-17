const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');

const PlanetarySystem = sequelize.define("PlanetarySystem", {
    id: {
        type: DataTypes.INT,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    star: {
        type: DataTypes.STRING,
        allowNull: true,
    }
}, {
    tableName: "planetary_system"
});

module.exports = PlanetarySystem;