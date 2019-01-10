#!/usr/bin/env node

const index = require('./index.js');
const orm = require('./orm.js');

// Method 1 //
index.handler({}, {}, (error, response) => {
    console.log(response);
    console.log('Execution done for index.handler for plain connection with callback');
});

// Method 2 //
index.asyncHandler((response) => {
    // This response will be used in API Gateway and no output will be printed here.
});

// Method 3 //
index.poolPromiseHandler((response) => {
    // This response will be used in API Gateway and no output will be printed here.
});


// Method 4 //
orm.handler({}, {}, (error, response) => {
    if (error) {
        console.log(`Connection error ${error}`);
    } else {
        console.log('Successfully connected');
    }

    console.log('Execution done for orm.handler for Sequelize ORM connection with callback');
});
