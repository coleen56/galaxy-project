const role = (sequelize, DataTypes) => {
    return sequelize.define("roles", {
        id: {
            type: DataTypes.INT,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    });
};
module.exports = role;