//const envVar = 
require("dotenv").config();

const setConfig = () => {
    const config = {
        development: {
            username: process.env.DB_USERNAME,//DB_USER
            password: process.env.DB_LOCAL_PASS,//DB_PASS
            database: process.env.DB_TEST,//DB_database,
            host: process.env.DB_LOCAL_HOST,//DB_HOST,
            dialect: "mysql"
        },
        test: {
            username: process.env.DB_USERNAME,//DB_USER,
            password: process.env.DB_LOCAL_PASS,//DB_PASS
            database: process.env.DB_TEST,//DB_database,
            host: process.env.DB_LOCAL_HOST,//DB_HOST,
            dialect: "mysql"
        },
        production: {
            use_env_variable: "JAWSDB_URL",
            dialect: "mysql"
        }
    };
    console.log("***", config);
    return JSON.stringify(config);
};

module.exports = setConfig; 