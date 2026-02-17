const Planet =(sequelize, DataTypes) => {
    return sequelize.define("Planet", {
        id: {
            type: DataTypes.INTEGER,
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
}

module.exports = Planet;