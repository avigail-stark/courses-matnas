const mysql = require('promise-mysql');

let db;

mysql.createPool({
        connectionLimit: 100,
        host: "process.env.matnas_course_URL",
        user: "process.env.matnas_course_USER",
        password: "process.env.matnas_course_PASSWORD",
        database: "process.env.matnas_course_DATABASE"
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