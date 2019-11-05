const mysql = require('promise-mysql');

let db;
mysql.createPool({
        connectionLimit: 100,
        host: process.env.matnas_course_URL,
        user: process.env.matnas_course_USER,
        password: process.env.matnas_course_PASSWORD,
        database: process.env.matnas_course_DATABASE
    })
    .then((c) => {
        db = c;
    })
    .catch((e) => {
        console.error(e);
    });

module.exports = {
    login
    // register
}

async function login(req, res) {
    let userName = req.body.userName;
    let password = req.body.password;

    let users = await db.query("select * from teachers_workers");
    for (let user of users) {
        if (user.userName === userName && user.password === password) {
            return res.send("OK");
        }
    }

    res.status(500);
    res.send("ERROR");
};