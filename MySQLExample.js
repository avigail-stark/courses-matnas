const mysql = require('promise-mysql');

let db;

mysql.createPool({
        connectionLimit: 100,
        host: "localhost",
        user: "root",
        password: "h032540338",
        database: "course_matnas"
    })
    .then((c) => {
        db = c;
    })
    .catch((e) => {
        console.error(e);
    });

module.exports = async function (req, res) {
    let promise = db.query("select * from teachers");
    let data = await promise;
    res.send(data);
}