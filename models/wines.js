const Sequelize = require("sequelize");

module.exports = function(sequelize, DataTypes) {
  const wines = sequelize.define(
    "wines", {
            id: {
                autoIncrement: true,
                allowNull: false
            },
            vintage: {
                type: DataTypes.STRING,
                allowNull: false
            },
            country: {
                type:DataTypes.STRING,
                allowNull: false
            },
            county: {
                type: DataTypes.STRING,
                allowNull: false
            },
            designation:{
                type: DataTypes.STRING,
                allownUll: false
            },
            points: { 
                type: DataTypes.INTEGER,
                allowNull: false
            },
            price: {
                type: DataTypes.STRING,
                allowNull: false
            },
            province: {
                type: DataTypes.STRING,
                allowNull: false
            },
            title: {
                type: DataTypes.STRING,
                allowNull: false
            },
            variety: {
                type: DataTypes.STRING,
                allowNull: false
            },
            winery: {
                type: DataTypes.STRING,
                allowNull: false
            },
            createdAt: {
                type:Sequelize.DATE,
                FIELD: 'created_at'
            },
            updatedAt: {
                type: Sequelize.DATE,
                field: 'updated_at'
            }
        },  {
                timestamps: false
            }
    );
    wines.associate = function(models){
        wines.hasMany(mdoels.User, {
            foreignKey: {
                allownull: false
            },
            onDelete: 'cascade'
        });
    };
    return wines;
};