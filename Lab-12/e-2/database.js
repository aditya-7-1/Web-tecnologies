const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

mongoose.connect('mongodb://localhost:27017/adityaDB')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Connection error', err));

const userSchema = new mongoose.Schema({
    name: String,
    role: String
});

const User = mongoose.model('User', userSchema);

app.post('/add', async (req, res) => {
    const user = new User({ name: 'Aditya', role: 'Student' });
    await user.save();
    res.json(user);
});

app.get('/users', async (req, res) => {
    const users = await User.find();
    res.json(users);
});

app.put('/update/:id', async (req, res) => {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, { name: 'Aditya Updated' }, { new: true });
    res.json(updatedUser);
});

app.delete('/delete/:id', async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    res.send('User Deleted');
});

app.listen(3000, () => {
    console.log('Database server running on port 3000');
});