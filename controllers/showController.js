module.exports = (req, res) => {
    const { name, age } = req.params;
    res.send('Toi la ' + name + ', ' + age + ' tuoi.');
}