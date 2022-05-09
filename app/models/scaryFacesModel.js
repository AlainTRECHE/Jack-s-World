const { DataTypes, Sequelize } = require("sequelize");
const sequelize = require("../database");

class Character extends Sequelize.Model {}

Character.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: DataTypes.TEXT,
    description: DataTypes.TEXT,
    picture: DataTypes.TEXT
}, {
    sequelize,
    tableName: "character"
});

module.exports = Character;