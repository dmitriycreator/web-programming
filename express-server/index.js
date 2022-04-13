const path = require('path');
const fs = require('fs');
const express = require('express');
const app = express();
const urlencodedParser = express.urlencoded({extended: false});

app.use(express.static(path.join(__dirname, 'public')))

//<<<<<<< HEAD
app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/public/form.html`);
});

app.post('/', urlencodedParser, function(req, res) {
    if (!req.body) return res.sendStatus(400);
    console.log(req.body);
    res.send(`Hello ${req.body.username}`);
    fs.appendFileSync(`public/users.txt`, `${req.body.username}  ${req.body.password}`, `utf8`);
//=======
});
app.get('/login', (req, res) => {
    res.sendFile(`${__dirname}/public/form.html`);
});

app.post('/login', urlencodedParser, function(req, res) {
    if (!req.body) return res.sendStatus(400);
    console.log(req.body);
    let fileContent = fs.readFileSync(`public/users.txt`, `utf8`);
    let pos = fileContent.indexOf(`${req.body.username}`);
    if (pos === -1) {
        res.send(`Welcome new user ${req.body.username}`);
        fs.appendFileSync(`public/users.txt`, `${req.body.username} ${req.body.password} \n`, `utf8`);
    } else {
        res.send(`Welcome, i already know you, ${req.body.username}`);
    }
//>>>>>>> 6e5096d (Express server)
});

app.listen(3000, () => {
console.log('App listening on port 3000');
});