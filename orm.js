const Sequelize = require('sequelize');
const Constants = require('./constants.js');

ormConnection = (callback) => {

    const sequelize = new Sequelize(Constants.dbName, Constants.dbUser, Constants.dbPass, {
        host: Constants.dbHost,
        port: Constants.dbPort,
        dialect: 'postgres',
      
        pool: {
          max: 5,
          min: 0,
          acquire: 30000,
          idle: 10000
        },
      });

    sequelize.authenticate().then(() => {
        sequelize.close();
        callback(null, 'Successfully connected');
    }).catch(err => {
        callback(err, `Connection error `);
    });
};

module.exports.handler = (event, context, callback) => {
    console.log('Connecting to DB via Sequelize ORM pool');
    ormConnection(callback);
};