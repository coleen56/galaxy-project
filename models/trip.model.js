const Trip =( sequelize, DataTypes) =>
{
    sequelize.define("Trip", {
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
    }, {tableName: "trip",})
        return Trip;
};

module.exports = Trip;