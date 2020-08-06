var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'galeria'
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