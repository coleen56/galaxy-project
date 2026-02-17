const Galaxy = (sequelize, DataTypes) => {
    sequelize.define("Galaxy", {
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
    return Galaxy;
}

module.exports = Galaxy;

