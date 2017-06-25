'use strict';

console.log('Loading function');

const doc = require('dynamodb-doc');

const dynamo = new doc.DynamoDB();
exports.handler = (event, context, callback) => {
    //console.log('Received event:', JSON.stringify(event, null, 2));
    const headers = {
            'Content-Type': 'application/json',
        };
    const done = (err, res) => callback(null, {
        statusCode: err ? '400' : '200',
        body: err ? err.message : JSON.stringify(res),
        headers: headers,
    });

    var searchId = JSON.parse(event.query.id);
    var params = {};
    params.TableName = "angelhackteam7";
    params.Key = {id : searchId};
    
    if (searchId) {
      dynamo.getItem(params, done); 
    } else {
      dynamo.scan({ TableName: "angelhackteam7" }, done);
    }
};
