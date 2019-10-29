module.exports = {
    login
}

let users = [{
    userName: 'nir',
    password: '123'
}];

function login(res, req) {
    let userName = req.body.userName;
    let password = req.body.password;

    for (let user of users) {
        if (user.userName === req.body.userName && user.password === req.body.password) {
            res.send("OK");
        } else {
            res.send("ERORR");
        }
    }

    res.send("ERORR");

};