var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'us-cdbr-east-02.cleardb.com',
    user: 'b45edfa7a0e042',
    password: '2d95def1',
    database: 'heroku_dc6578ea22b1ea9'
});

connection.connect(
    (err) => {
        if (!err) {
            console.log("Conexion establecida");
        } else {
            console.log("Conexion fallida");
        }
    }
);

module.exports = connection;