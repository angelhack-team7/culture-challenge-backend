'use strict';

console.log('Loading function');

const doc = require('dynamodb-doc');

const dynamo = new doc.DynamoDB();
exports.handler = (event, context, callback) => {
    const headers = {
            'Content-Type': 'application/json',
        };
    const done = (err, res) => callback(null, {
        statusCode: err ? '400' : '200',
        body: err ? err.message : JSON.stringify(res),
        headers: headers,
    });
    
    var params = {};
    params.TableName = "angelhackteam7";
    params.Item = JSON.parse(event.body);
    dynamo.putItem(params, done);
};
