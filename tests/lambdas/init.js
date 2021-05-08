const AWS = require('aws-sdk')
AWS.config.region = "us-east-1"

function init() {
    process.env.TABLE_NAME = "my-assignment-1-db"
}

module.exports = init