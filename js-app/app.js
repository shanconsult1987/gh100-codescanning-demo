const express = require('express');
const app = express();

app.get('/user', (req, res) => {

    const user = req.query.name;

    eval("console.log(user)");

    res.send(user);
});

app.listen(3000);
