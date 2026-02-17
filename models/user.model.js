const user = (sequelize, DataTypes) => {
    return sequelize.define("users", {
        id: {
            type: DataTypes.INT,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }, {tableName: "users"});
};
module.exports = user;