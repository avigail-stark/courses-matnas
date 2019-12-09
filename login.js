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
    login,
    register,
    registerstudent

}
//כניסה למערכת
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
    res.send("שם משתמש ו/או סיסמא אינם נכונים");
};

//הרשמה למערכת
async function register(req, res) {
    let firstName = req.body.firstName;
    let lastName = req.body.lastName;
    let userName = req.body.userName;
    let password = req.body.password;
    let id = req.body.id;
    let cellphone = req.body.cellphone;
    let phone = req.body.phone;
    let st = req.body.st;
    let houseNo = req.body.houseNo;
    let city = req.body.city;
    let email = req.body.email;
    let startWorkDate = req.body.startWorkDate;

    let users = await db.query("select * from teachers_workers");

    for (let user of users) {

        if (
            // user.firstName === firstName &&
            //     user.lastName === lastName &&

            user.userName === userName &&
            user.password === password
            // user.id === id &&
            // user.cellphone === cellphone &&
            // user.phone === phone &&
            // user.st === st &&
            // user.houseNo === houseNo &&
            // user.city === city &&
            // user.email === email &&
            // user.startWorkDate === startWorkDate
        ) {
            res.status(500);
            return res.send("משתמש קיים במערכת");
        }
    }
    await db.query(`insert into teachers_workers (first_name, last_name, userName,
             password, id, cell_phone, phone_num, st, num_house, city, mail, start_work_date)
            VALUES("${req.body.firstName}", "${req.body.lastName}", "${req.body.userName}", 
            "${req.body.password}", "${req.body.id}", "${req.body.cellphone}", "${req.body.phone}", 
            "${req.body.st}", "${req.body.houseNo}", "${req.body.city}", "${req.body.email}", 
            "${req.body.startWorkDate}")
            `);
    res.send("נרשמת בהצלחה");
};

//הרשמה של תלמיד למערכת
async function registerstudent(req, res) {
    let id = req.body.id;
    let firstname = req.body.firstname;
    let lastname = req.body.lastname;
    let cellphone = req.body.cellphone;
    let phonenum = req.body.phonenum;
    let email = req.body.email;

    let users = await db.query("select * from students");
    console.log("users before for "+users);
//  console.log(phonenum);
// let x=db.query(`select id,firstname,lastname,cellphone,phonenum,email from students`);
// console.log(x);

    for (let user of users) {
        // console.log("user "+user.id);
        // console.log("users "+users);
        // console.log(id);
        
        
        if (
            user.id === id &&
            user.firstname === firstname &&
            user.lastname === lastname
            
        ) {
            res.status(500);
            return res.send("משתמש קיים במערכת");
        }
    }
    // console.log("users before query "+firstname);
    
    await db.query(`INSERT INTO students (id,firstname,lastname,cellphone,phonenum,email ) 
    VALUES("${req.body.id}","${req.body.firstname}","${req.body.lastname}",${req.body.cellphone},
    ${req.body.phonenum},"${req.body.email}")`);
    res.send("נרשמת בהצלחה");
};