const mysql = require('promise-mysql');

let db;

mysql.createPool({
        connectionLimit: 100,
        host: "localhost",
        user: "root",
        password: "בשדאשרל91",
        database: "course_matnas"
    })
    .then((c) => {
        db = c;
        db.query("select * from teachers");
    })
    .catch((e) => {
        console.error(e);
    });

module.exports = function (req, res) {

}