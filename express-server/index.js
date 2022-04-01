const path = require('path');
const fs = require('fs');
const express = require('express');
const app = express();
const urlencodedParser = express.urlencoded({extended: false});

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/public/form.html`);
});

app.post('/', urlencodedParser, function(req, res) {
    if (!req.body) return res.sendStatus(400);
    console.log(req.body);
    res.send(`Hello ${req.body.username}`);
    fs.appendFileSync(`public/users.txt`, `${req.body.username}  ${req.body.password}`, `utf8`);
});

app.listen(3000, () => {
   console.log('Application listening on port 3000');
});

