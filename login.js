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
    register
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
    res.send("שם משתמש ו/או סיסמא אינם נכונים");
};


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
            VALUES("${req.body.firstName}", "${req.body.lastName}", "${req.body.userName}", "${req.body
                .password}", "${req.body.id}", "${req.body.cellphone}", "${req.body.phone}", "${req
                .body.st}", "${req.body.houseNo}", "${req.body.city}", "${req.body.email}", "${req
                .body.startWorkDate}")
            `);
    res.send("נרשמת בהצלחה");

};