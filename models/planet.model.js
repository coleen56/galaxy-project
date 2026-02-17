const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');

const Planet = sequelize.define("Planet", {
    id: {
        type: DataTypes.INT,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    inhabitant: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    tableName: "planet",
});

module.exports = Planet;