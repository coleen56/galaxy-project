const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');

const Trip = sequelize.define("Trip", {
    id: {
        type: DataTypes.INT,
        primaryKey: true,
        autoIncrement: true,
    },
    distance: {
        type: DataTypes.DOUBLE,
        allowNull: true,
    },
    departure: {
        type: DataTypes.TIMESTAMP,
        allowNull: false,
    },
    price: {
        type: DataTypes.DOUBLE,
        allowNull: false,
    }
}, {
    tableName: "trip",
});

module.exports = Trip;