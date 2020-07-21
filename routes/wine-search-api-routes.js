const db = require("../models");
const { Sequelize } = require("../models");
const Op = Sequelize.Op; 

module.exports = (app) => {
    // Find all wines that contain filtered search and return them to the user with res.json
    app.post("/api/wines/variety", (req, res) => {
        console.log("API call for variety filter")
        db.wines.findAll({
            where: {
                Variety: {
                    [Op.substring]: req.body.variety
                }
            }
        }).then((dbWines) => {
            res.json(dbWines.slice(0,11));
        }).catch((err) => {
            if (err) return console.log(err);
        })
    });

    app.post("/api/wines/price", (req, res) => {
        console.log("API call for price filter"); 
        db.wines.findAll({
        }).then((dbWines) => {
            const filteredArray = [];
            dbWines.forEach(wine => {
                const priceInt = Number(wine.Price.replace(/[^0-9.-]+/,"")); 
                if (priceInt >= req.body.lower && priceInt <= req.body.upper) {
                    filteredArray.push(wine);
                }
            });
            res.json(filteredArray.slice(0,11));
        }).catch((err) => {
            if (err) return console.log(err);
        })
    });

    app.post("/api/wines/vintage", (req, res) => {
        console.log("API call for vintage filter"); 
        db.wines.findAll({
            where: {
                Vintage: {
                    [Op.endsWith]: req.body.vintage
                }
            }
        }).then((dbWines) => {
            res.json(dbWines.slice(0,11)); 
        }).catch((err) => {
            if (err) return console.log(err);
        })
    });

    app.get("/api/wines/", (req, res) => {
        console.log("API call for all wines"); 
        db.wines.findAll({})
            .then((dbWines) => {
                res.json(dbWines.slice(0,101));
            }).catch((err) => {
                if (err) return console.log(err);
            })
    });

}