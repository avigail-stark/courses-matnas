const mysql = require('promise-mysql');

let db;

mysql.createPool({
        connectionLimit: 100,
        host: "localhost",
        user: "root",
        password: "castark91",
        database: "course_matnas"
    })
    .then((c) => {
        db = c;
    })
    .catch((e) => {
        console.error(e);
    });

module.exports = {
    login
}

// let users = [{
//     userName: 'nir',
//     password: '123'
// }];

function login(res, req) {
    let userName = req.body.userName;
    let password = req.body.password;

    let users = db.query("select * from teachers");

    for (let user of users) {
        if (user.userName === req.body.userName && user.password === req.body.password) {
            res.send("OK");
        } else {
            res.send("ERORR");
        }

    }

    res.send("ERORR");

};