const db = require("../models"); 

module.exports = (app) => {
    // Find all wines that match filtered search and return them to the user with res.json
    app.get("/api/wines/:variety?/:price?/:vintage?", (req, res) => {
        db.wines.findAll({
            where: {
                variety: req.params.variety,
                price: req.params.price,
                vintage: req.params.vintage
            }
        })
        .then((dbWines) =>  {
            res.json(dbWines); 
        }); 
    }); 

    app.get("/api/wines/", (req, res) => {
        db.wines.findAll({})
        .then((dbWines) =>  {
            res.json(dbWines); 
        }); 
    }); 

}