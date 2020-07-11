const Sequelize = require("sequelize");

module.exports = function(sequelize, DataTypes) {
    const wines = sequelize.define("wines", {
        wines: {
            id: {
                type: DataTypes.STRING,
                autoIncrement: true,
                references: {
                    model: "user",
                    key: "id"
                }
            },
            date: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            price: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
            rating: { 
                type: DataTypes.INTEGER 
            },
            country: {
                type:DataTypes.STRING,
                allowNull: false
            },
            variety: {
                type: DataTypes.STRING,
                allowNull: false
            },
            county: {
                type: DataTypes.STRING,
                allowNull: true
            },
            designation: {
                type: DataTypes.STRING,
                allowNull: true
            },
            province: {
                type: DataTypes.STRING,
                allowNull: false
            },
            title: {
                type: DataTypes.STRING,
                allowNull: false
            },
            winery: {
                type: DataTypes.STRING,
                allowNull: false
            },
            vintage: {
                type: DataTypes.INTEGER,
                allowNull: false
            }
        }
    });

    wines.associate = function(models){
        wines.hasMany(models.User, {
            foreignKey: {
                allowNull: false
            },
            onDelete: 'cascade'
        });
    };

    return wines;
};