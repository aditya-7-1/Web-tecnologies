const express = require('express');
const app = express();

app.use(express.json());

let users = [{ id: 1, name: 'Aditya' }];

app.get('/users', (req, res) => {
    res.json(users);
});

app.post('/users', (req, res) => {
    const newUser = { id: Date.now(), name: req.body.name };
    users.push(newUser);
    res.status(201).json(newUser);
});

app.put('/users/:id', (req, res) => {
    const { id } = req.params;
    const index = users.findIndex(u => u.id == id);
    if (index !== -1) {
        users[index].name = req.body.name;
        res.json(users[index]);
    } else {
        res.status(404).send('User not found');
    }
});

app.delete('/users/:id', (req, res) => {
    users = users.filter(u => u.id != req.params.id);
    res.send('User deleted');
});

app.listen(3000, () => {
    console.log('REST API running on port 3000');
});