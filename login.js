const mysql = require('promise-mysql');

let db;

mysql.createPool({
        connectionLimit: 100,
<<<<<<< HEAD
        host: "localhost",
        user: "root",
        password: "castark91",
        database: "course_matnas"
=======
      

        host: "process.env.matnas_course_URL",
        user: "process.env.matnas_course_USER",
        password: "process.env.matnas_course_PASSWORD",
        database: "process.env.matnas_course_DATABASE"
>>>>>>> 5b1e4a1cbd24ec859042ff7f357721cbdc76a5a2
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

<<<<<<< HEAD
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
=======
function login(req, res) {
    debugger;
    let userName = req.body.userName;
    let password = req.body.password;

    let users;
    db.query("select * from teachers_workers")
        .then((u) => {
            users = u;})
            .then((users)=>{
            console.log(users);
            for (let user of users) {
                console.log(users);
                if (user.userName === userName && user.password === password) {
                    res.send("OK");
                }
            }
            res.status(500);
            res.send("ERORR");
        });
};
>>>>>>> 5b1e4a1cbd24ec859042ff7f357721cbdc76a5a2

// function register(req, res) {
//     let userName = req.body.userName;
//     let password = req.body.password;

//     let users;
//     db.query("select * from teachers_workers")
//         .then((u) => {
//             users = u;
//             for (let user of users) {
//                 if (user.userName === userName && user.password === password) {
//                     res.status(500);
//                     res.send("ERROR");
//                 }
//             }
//             let user = {
//                 userName,
//                 password
//             };
//             //??? העברה של המידע לSQL 
//             db.query("insert into teachers_workers values (" + userName + "," + password + ")")
//         });
// }