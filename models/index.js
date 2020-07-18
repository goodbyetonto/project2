// 'use strict';

// require('dotenv').config();
// const fs = require('fs');
// const path = require('path');
// const Sequelize = require('sequelize');
// const basename = path.basename(module.filename);
// const env = process.env.NODE_ENV || 'development';
// const db = {}; 
// const config = {
// 	username: process.env.DB_USERNAME,
// 	password: process.env.DB_LOCAL_PASS,
// 	database: process.env.DB_TEST,
//   host: process.env.DB_LOCAL_HOST,
//   port: 3306,
// 	dialect: 'mysql'
};
'use strict';
require('dotenv').config(); 
var fs = require('fs');
var path = require('path');
var Sequelize = require('sequelize');
var basename = path.basename(module.filename);
var env = process.env.NODE_ENV || 'development';
const db = {}; 
var config = {
  "development": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASS,
    "database": process.env.DB_database,
    "host": process.env.DB_HOST,//"127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "use_env_variable": "JAWSDB_URL",
    "dialect": "mysql"
  }
}[env];
console.log(config);
console.log("config"); 
console.log(config); 
if (config.use_env_variable) {
  var sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
  var sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(function(file) {
    var model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(function(modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
