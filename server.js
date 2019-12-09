require("dotenv").config();
const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const login = require("./login.js");
// const studentreg = require("./studentreg.js");

// const test = require("./MySQLExample.js");
const port = process.env.PORT || 80;

app.set("view engine", "ejs");

app.use(express.static('public'));
app.use(cookieParser());
// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded());
// Parse JSON bodies (as sent by API clients)
app.use(express.json());

//user test tamlate
// app.get("/userInfo/:userId", (req, res) => {
//     console.log(req.params.userId);
//     res.render("pages/userInfo", {
//         userId: req.params.userId,
//         data: ['item1', 'item2']

//     });
// });

app.get("/", (req, res) => {
    console.log(req.params);
    res.render("./pages/home", {});
});
app.get("/secretary", (req, res) => {
    console.log(req.params);
    res.render("./pages/secretary", {});
});


// login test
app.get('', (req, res) => {
    return test(req, res);
});


app.get('/contact', (req, res) => res.sendFile('./public/pages/contact.html', {
    root: __dirname
}));
app.get('/gallery', (req, res) => res.sendFile('./public/pages/gallery.html', {
    root: __dirname
}));

app.get('/teacherreg', (req, res) => res.sendFile('./public/pages/teacherreg.html', {
    root: __dirname
}));
app.get('/studentreg', (req, res) => res.sendFile('./public/pages/studentreg.html', {
    root: __dirname
}));
app.get('/courseDetails', (req, res) => res.sendFile('./public/pages/courseDetails.html', {
    root: __dirname
}));
//התחברות למערכת
app.post('/registration/login', async (req, res) => {
    login.login(req, res);
});

//רישום מרצה חדש
app.post('/registration/register', async (req, res) => {
    let result = await login.register(req, res);
    res.send(result);
});

//רישום תלמיד חדש
app.post('/registration/registerstudent', async (req, res) => {
   let result= await login.registerstudent(req, res);
   res.send(result);
    console.log("server" );
});

app.listen(port, () => console.log('Example app listening on port ' + port));