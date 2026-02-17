const refresh_token = (sequelize, DataTypes) => {
    return sequelize.define("refresh_tokens", {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        token: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        expires: {
            type: DataTypes.DATE,
            allowNull: false,
        }
    }, {tableName: "refresh_tokens"});
};
module.exports = refresh_token;