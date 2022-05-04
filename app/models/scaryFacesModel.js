const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database");

class Character extends Model {}

Character.init({
    name: DataTypes.TEXT,
    description: DataTypes.TEXT,
    picture: DataTypes.TEXT
}, {
    sequelize,
    tableName: "character"
});

module.exports = Character;