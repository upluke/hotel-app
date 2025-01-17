var mysql = require('mysql');


var rdsUrl = 'hotel-app-database.cluster-cspww6uck2w2.us-east-1.rds.amazonaws.com';
var password =  'Rds_31415926';
var user = 'admin';

// mysql connection pool
var rdsPool = mysql.createPool({
    connectionLimit : 12,
    host: rdsUrl,
    password: password,
    user: user
});

module.exports.pool = rdsPool;
module.exports.url = rdsUrl;
