const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const routes = require('./routes');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
//app.use(express.static('frontend'));


const mongoUrl = 'mongodb+srv://temp_user:12345@cluster0.lubpf6e.mongodb.net/movie_center?retryWrites=true&w=majority';

app.get('', (req, res) => {
    res.sendFile(path.join(__dirname,'public','html','index.html'));
 });

app.use('/assets', express.static(path.join(__dirname,'public')));
app.use(routes);

mongoose.connect(mongoUrl).then(() => {
    app.listen(3000, () => {
        console.log('app is running...');
    });
}).catch(err => {
    console.log('Could not connect', err);
});