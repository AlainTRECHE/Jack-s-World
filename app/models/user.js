const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = require("./getConnexion")();

class User extends Model {
    getFullName() {
        return this.firstname + " " + this.lastname;
    }
}

User.init(
    {
        email: DataTypes.TEXT,
        password: DataTypes.TEXT,
        firstname: DataTypes.STRING,
        lastname: DataTypes.STRING,
        role: DataTypes.STRING,
        fullname: {
            type: DataTypes.VIRTUAL,
            get() {
                return `${this.firstname} ${this.lastname}`;
            },
        },
    },
    {
        sequelize: sequelize,
        tableName: "user",
    }
);

module.exports = User;
