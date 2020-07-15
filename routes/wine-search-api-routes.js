const db = require("../models"); 

module.exports = (app) => {
    // Find all wines that match filtered search and return them to the user with res.json
    app.get("/api/wines/:variety", (req, res) => {
        db.wines.findAll({
            where: {
                variety: req.params.Variety,
                // price: req.params.Price,
                // vintage: req.params.Vintage
            }
        })
        .then((dbWines) =>  {
            res.json(dbWines); 
        })
        .catch((err) => {
            if(err) return console.log(err); 
        })
    }); 

    app.get("/api/wines/", (req, res) => {
        db.wines.findAll({})
        .then((dbWines) =>  {
            res.json(dbWines); 
        }).catch((err) => {
            if(err) return console.log(err); 
        })
    }); 

}