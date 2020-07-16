const db = require("../models");

module.exports = (app) => {
    // Find all wines that match filtered search and return them to the user with res.json
    app.get("/api/wines/:variety", (req, res) => {
        db.wines.findAll({
            where: {
                Variety: req.params.variety
            }
        }).then((dbWines) => {
            res.json(dbWines);
        }).catch((err) => {
            if (err) return console.log(err);
        })
    });

    app.get("/api/wines/:price", (req, res) => {
        db.wines.findAll({
        }).then((dbWines) => {
            const filteredArray = [];
            dbWines.forEach(wine => {
                if (wine.Price >= req.body.lowerLimit && wine.Price <= req.body.upperLimit) {
                    filteredArray.push(wine);
                }
            });
            res.json(filteredArray);
        }).catch((err) => {
            if (err) return console.log(err);
        })
    });

    app.get("/api/wines/:vintage", (req, res) => {
        db.wines.findAll({
        }).then((dbWines) => {
            const filteredArray = []; 
            dbWines.forEach(wine => {
                if (req.body === wine.Vintage[:2]) {
                    
                }
            });
            res.json(dbWines);
        }).catch((err) => {
            if (err) return console.log(err);
        })
    });

    app.get("/api/wines/", (req, res) => {
        db.wines.findAll({})
            .then((dbWines) => {
                res.json(dbWines);
            }).catch((err) => {
                if (err) return console.log(err);
            })
    });

}