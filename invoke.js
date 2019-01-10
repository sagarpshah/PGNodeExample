#!/usr/bin/env node

const index = require('./index.js');
const orm = require('./orm.js');

/*
// Method 1 //
index.handler({}, {}, (error, response) => {
    console.log(response);
});
*/

/*
// Method 2 //
index.asyncHandler((response) => {
    // This response will be used in API Gateway
});
*/

/*
// Method 3 //
index.poolPromiseHandler((response) => {
    // This response will be used in API Gateway
});
*/

orm.handler({}, {}, (error, response) => {
    if (error) {
        console.log(`Connection error ${error}`);
    } else {
        console.log('Successfully connected');
    }
});
