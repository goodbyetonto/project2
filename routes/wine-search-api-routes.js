const db = require("../models");

module.exports = (app) => {
    // Find all wines that match filtered search and return them to the user with res.json
    app.get("/api/wines/variety/:variety", (req, res) => {
        db.wines.findAll({
            where: {
                Variety: req.params.variety
            }
        }).then((dbWines) => {
            res.json(dbWines.slice(0,11));
        }).catch((err) => {
            if (err) return console.log(err);
        })
    });

    app.get("/api/wines/price/:price", (req, res) => {
        db.wines.findAll({
        }).then((dbWines) => {
            const filteredArray = [];
            dbWines.forEach(wine => {
                if (wine.Price >= req.body.lowerLimit && wine.Price <= req.body.upperLimit) {
                    filteredArray.push(wine);
                }
            });
            res.json(filteredArray.slice(0,11));
        }).catch((err) => {
            if (err) return console.log(err);
        })
    });

    app.get("/api/wines/vintage/:vintage", (req, res) => {
        console.log("API call for vintage filter"); 
        console.log(req.params.vintage); 
        db.wines.findAll({
        }).then((dbWines) => {
            const filteredArray = []; 
            dbWines.forEach(wine => {
                if (wine.Vintage.slice(-2) === req.params.vintage.slice(-2)) {
                    filteredArray.push(wine); 
                }
            });
            res.json(filteredArray.slice(0,11));
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