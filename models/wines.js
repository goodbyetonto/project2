const Sequelize = require("sequelize");

module.exports = function(sequelize, DataTypes) {
  const wines = sequelize.define(
    "wines", {
            Vintage: {
                type: DataTypes.STRING,
                allowNull: false
            },
            Country: {
                type:DataTypes.STRING,
                allowNull: false
            },
            County: {
                type: DataTypes.STRING,
                allowNull: false
            },
            Designation:{
                type: DataTypes.STRING,
                allownUll: false
            },
            Points: { 
                type: DataTypes.INTEGER,
                allowNull: false
            },
            Price: {
                type: DataTypes.STRING,
                allowNull: false
            },
            Province: {
                type: DataTypes.STRING,
                allowNull: false
            },
            Title: {
                type: DataTypes.STRING,
                allowNull: false
            },
            Variety: {
                type: DataTypes.STRING,
                allowNull: false
            },
            Winery: {
                type: DataTypes.STRING,
                allowNull: false
            },
            CreatedAt: {
                type:Sequelize.DATE,
                FIELD: 'created_at'
            },
            UpdatedAt: {
                type: Sequelize.DATE,
                field: 'updated_at'
            }
        },  {
                timestamps: false
            }
    );
    wines.associate = function(models){
        wines.belongsToMany(models.User, {
            through: "wines_User",
            as: "User",
            foreignKey: "User_id",
            onDelete: 'cascade'
        });
    };
    return wines;
};