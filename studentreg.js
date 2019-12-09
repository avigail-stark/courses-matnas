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
    registerstudent
}


// //הרשמה של תלמיד למערכת
// async function registerstudent(req, res) {
//     let id = req.body.id;
//     let firstname = req.body.firstname;
//     let lastname = req.body.lastname;
//     let cellphone = req.body.cellphone;
//     let phonenum = req.body.phonenum;
//     let email = req.body.email;

//     let users = await db.query("select * from students");
//     console.log("users before for "+users);
// //  console.log(phonenum);
// // let x=db.query(`select id,firstname,lastname,cellphone,phonenum,email from students`);
// // console.log(x);

//     for (let user of users) {
//         // console.log("user "+user.id);
//         // console.log("users "+users);
//         // console.log(id);
        
        
//         if (
//             user.id === id &&
//             user.firstname === firstname &&
//             user.lastname === lastname
            
//         ) {
//             res.status(500);
//             return res.send("משתמש קיים במערכת");
//         }
//     }
//     // console.log("users before query "+firstname);
    
//     await db.query(`INSERT INTO students (id,firstname,lastname,cellphone,phonenum,email ) 
//     VALUES("${req.body.id}","${req.body.firstname}","${req.body.lastname}",${req.body.cellphone},
//     ${req.body.phonenum},"${req.body.email}")`);
//     res.send("נרשמת בהצלחה");
// };