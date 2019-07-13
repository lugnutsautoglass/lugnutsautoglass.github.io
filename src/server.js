var mysql      = require('mysql');
var connection = mysql.createConnection({
  host: 'm7nj9dclezfq7ax1.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
  user:'w1qmwv0h9zqouolh',
  password:'hpxho4yx1gfgkoji',
  database:'bp14ilr2znome50w'
});

connection.connect();

connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});

connection.end();
