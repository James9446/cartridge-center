const express = require('express');
const bodyParser = require('body-parser');

const app = express();

let path = require('path');

const callAPI = require('./api.js');
// console.log('test', gameData.gameData.getGames());
// callAPI.gameData(console.log);
// console.log('test');
// const snes = require('/../public/snes.html');

// viewed at http://localhost:3000
// app.get('/', function(req, res) {
//     res.sendFile(path.join(__dirname + '../public/index.html'));
// });

app.use(express.static(path.join(__dirname, '../public')));
// app.use(express.static(path.join(__dirname, '/../snes')));

app.get('/games', function(req, res) {
    callAPI.gameData((data) => res.send(data));
});

app.get('/snes', function(req, res) {
    res.sendFile(path.join(__dirname, '../public', 'snes.html'));
});

app.get('/n64', function(req, res) {
    res.sendFile(path.join(__dirname, '../public', 'n64.html'));
});

app.listen(3000, function() {
    console.log('Server started and listening on port 3000');
});