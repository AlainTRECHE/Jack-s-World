const { Model, DataTypes } = require("sequelize");

const sequelize = require("../database");


class User extends Model {}

User.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    username: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING(255),
        allowNull: false
    }
}, {

    sequelize,
    tableName: "user"
});


module.exports = User;