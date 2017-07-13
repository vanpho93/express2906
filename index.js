const express = require('express');
const PhepTinh = require('./models/PhepTinh');
const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Hello</h1>');
});

// app.get('/show', (req, res) => {
//     res.send('Hi');
// });

app.get('/show/:name/:age', (req, res) => {
    const { name, age } = req.params;
    res.send('Toi la ' + name + ', ' + age + ' tuoi.');
});

app.get('/tinh/:tenPhepTinh/:soa/:sob', (req, res) => {
    const { tenPhepTinh, soa, sob } = req.params;
    const pt = new PhepTinh(tenPhepTinh, soa, sob);
    res.send(pt.getResultString());
});

// localhost:3000/tinh/CONG/4/5 => 4 + 5 = 9

app.listen(3000);
