require("dotenv").config();
const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const login = require("./login.js");
const test = require("./MySQLExample.js");
const port = process.env.PORT || 80;

app.set("view engine", "ejs");

app.use(express.static('public'));
app.use(cookieParser());
// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded());
// Parse JSON bodies (as sent by API clients)
app.use(express.json());

//user test tamlate
app.get("/userInfo/:userId", (req, res) => {
    console.log(req.params.userId);
    res.render("pages/userInfo", {
        userId: req.params.userId,
        data: ['item1', 'item2']

    });
});

app.get("/", (req, res) => {
    console.log(req.params);
    res.render("./pages/home", {});
});
app.get("/secretary", (req, res) => {
    console.log(req.params);
    res.render("./pages/secretary", {});
});

app.get("/", (req, res) => {
    console.log(req.params);
    res.render("./pages/home", {});
});
app.get("/secretary", (req, res) => {
    console.log(req.params);
    res.render("./pages/secretary", {});
});



// login test
app.get('/test', (req, res) => {
    return test(req, res);
});


app.get('/', (req, res) => res.sendFile('./views/pages/home.ejs', {
    root: __dirname
}));
app.get('/secretary', (req, res) => res.sendFile('./views/pages/secretary.ejs', {
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

app.post('/registration/register', (req, res) => {
    registration.register(req, res);
});
app.post('/registration/login', (req, res) => {
    login.login(req, res);
});

app.listen(port, () => console.log('Example app listening on port ' + port));