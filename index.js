const express = require('express');

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

class PhepTinh {
    constructor(tenPhepTinh, soa, sob) {
        this.tenPhepTinh = tenPhepTinh;
        this.soa = soa;
        this.sob = sob;
    }

    getResultString() {
        const expression = this.getExpression();
        const kq = eval(expression);
        return `${expression} = ${kq}`;
    }

    getExpression() {
        const { soa, sob } = this;
        if (this.tenPhepTinh === 'CONG') return `${soa} + ${sob}`;
        if (this.tenPhepTinh === 'TRU') return `${soa} - ${sob}`;
        if (this.tenPhepTinh === 'NHAN') return `${soa} * ${sob}`;
        return `${soa} / ${sob}`;
    }
}
