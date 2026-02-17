const Galaxy = (sequelize, DataTypes) => {
    return sequelize.define("Galaxy", {
        id: {
            type: DataTypes.INTEGER,
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
}

module.exports = Galaxy;

