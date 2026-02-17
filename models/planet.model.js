const Planet =(sequelize, DataTypes) => {
    sequelize.define("Planet", {
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
    return Planet;
}

module.exports = Planet;