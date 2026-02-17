const refresh_token = (sequelize, DataTypes) => {
    return sequelize.define("refresh_tokens", {
        id: {
            type: DataTypes.INT,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        token: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        expires: {
            type: DataTypes.TIMESTAMP,
            allowNull: false,
        }
    });
};
module.exports = refresh_token;