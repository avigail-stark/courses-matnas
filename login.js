const mysql = require('promise-mysql');

let db;

mysql.createPool({
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

module.exports = {
    login
}

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