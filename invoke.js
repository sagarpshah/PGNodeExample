#!/usr/bin/env node

const index = require('./index.js');

/*
// Method 1 //
index.handler({}, {}, (error, response) => {
    console.log(response);
});
*/

index.asyncHandler((response) => {
    
});

