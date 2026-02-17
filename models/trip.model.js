const Trip =( sequelize, DataTypes) =>
{
    return sequelize.define("Trip", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        distance: {
            type: DataTypes.DOUBLE,
            allowNull: true,
        },
        departure: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        price: {
            type: DataTypes.DOUBLE,
            allowNull: false,
        }
    }, {tableName: "trip",})
};

module.exports = Trip;