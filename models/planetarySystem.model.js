const PlanetarySystem =(sequelize, DataTypes) => {
    sequelize.define("PlanetarySystem", {
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
    return PlanetarySystem;
}

module.exports = PlanetarySystem;