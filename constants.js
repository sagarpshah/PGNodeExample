module.exports = Object.freeze({
    dbName: 'dbName',
    dbUser: 'username',
    dbPass: 'password',
    dbHost: 'instance.cqcskh0ghf5e.ap-south-1.rds.amazonaws.com',
    dbPort: '5432',

    poolMaxSize: 5,
    poolMinSize: 0,
    poolAcquireTimeout: 30000,
    poolIdleTimeout: 10000
});

/*
// Check the DB connection with below command in your terminal //
psql --host=instance.cqcskh0ghf5e.ap-south-1.rds.amazonaws.com 
     --port=5432 
     --username=username 
     --password 
     --dbname=dbName
*/
