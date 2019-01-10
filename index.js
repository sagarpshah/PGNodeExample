const { Pool, Client } = require('pg');
const Constants = require('./constants.js');

getClient = () => {
    const client = new Client({
        user: Constants.dbUser,
        host: Constants.dbHost,
        database: Constants.dbName,
        password: Constants.dbPass,
        port: Constants.dbPort,
      });

    return client;
};

plainConnection = (callback) => {
    const client = getClient();

    client.connect(err => {
        client.end();

        if (err) {
            callback(null, `Connection error ${err}`);
        } else {
            callback(null, 'Successfully connected');
        }
    });
};

const sendRes = (status, body) => {
    var response = {
      statusCode: status,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    };
    return response;
  }

asyncConnection = async() => {
    const client = getClient();

    var response;

    try {
        await client.connect();
        client.end();
        console.log('Successfully connected');
        response = sendRes(200, 'Successfully connected');
    } catch (err) {
        console.log(`Connection error ${err}`);
        response = sendRes(401, `Connection error ${err}`);
    }

    return response;
};

poolPromiseConnection = async() => {
    const pool = new Pool({
        user: Constants.dbUser,
        host: Constants.dbHost,
        database: Constants.dbName,
        password: Constants.dbPass,
        port: Constants.dbPort,
      });
    
    pool.connect().then(client => {
        client.release()
        console.log('Successfully connected');
        response = sendRes(200, 'Successfully connected');
    }).catch(err => {
        console.log(`Connection error ${err.stack}`);
        response = sendRes(401, `Connection error ${err.stack}`);
    });
};

module.exports.handler = (event, context, callback) => {
    plainConnection(callback);
};

module.exports.asyncHandler = async (event) => {
    return await asyncConnection();
};

module.exports.poolPromiseHandler = async (event) => {
    return await poolPromiseConnection();
}