const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');

const Galaxy = sequelize.define("Galaxy", {
    id: {
        type: DataTypes.INT,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    tableName: "galaxy",
});

module.exports = Galaxy;

