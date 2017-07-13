const express = require('express');
const PhepTinh = require('./models/PhepTinh');
const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Hello</h1>');
});

app.get('/show/:name/:age', require('./controllers/showController'));

app.get('/tinh/:tenPhepTinh/:soa/:sob', require('./controllers/tinhController'));

app.listen(3000);
