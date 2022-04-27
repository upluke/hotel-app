var mysql = require('mysql');


var rdsUrl = 'replace with endpoint to the RDS';
var password =  'replace with password to the RDS';
var user = 'replace with user to the RDS';

// mysql connection pool
var rdsPool = mysql.createPool({
    connectionLimit : 12,
    host: rdsUrl,
    password: password,
    user: user
});

module.exports.pool = rdsPool;
module.exports.url = rdsUrl;
