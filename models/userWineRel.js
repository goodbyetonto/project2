module.exports = function(sequelize, Datatypes) {
const relationship = sequelize.define("relationship", {
        userID: {
            type: Datatypes.INTEGER,
            allowNull: false
        },
        wineID: {
            type: Datatypes.INTEGER,
            allowNull: false
        }
    });
    return relationship;
};