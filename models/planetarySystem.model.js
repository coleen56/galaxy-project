const PlanetarySystem =(sequelize, DataTypes) => {
    return sequelize.define("PlanetarySystem", {
        id: {
            type: DataTypes.INTEGER,
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
}

module.exports = PlanetarySystem;