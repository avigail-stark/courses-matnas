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
    login,
    register
}

function login(req, res) {
    let userName = req.body.userName;
    let password = req.body.password;

    let users;
    db.query("select * from teachers_workers")
        .then((u) => {
            users = u;
            for (let user of users) {
                if (user.userName === userName && user.password === password) {
                    res.send("OK");
                }

            }
            res.status(500);
            res.send("ERORR");
        });
};

function register(req, res) {
    let userName = req.body.userName;
    let password = req.body.password;

    let users;
    db.query("select * from teachers_workers")
        .then((u) => {
            users = u;
            for (let user of users) {
                if (user.userName === userName && user.password === password) {
                    res.status(500);
                    res.send("ERROR");
                }
            }
            let user=
            {
                userName,
                password
            };
            //???
            db.query("insert into teachers_workers values ("+userName+","+password+")")
        });
}