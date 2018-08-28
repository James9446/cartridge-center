const express = require('express');
const bodyParser = require('body-parser');

const app = express();

var path = require('path');

// viewed at http://localhost:3000
// app.get('/', function(req, res) {
//     res.sendFile(path.join(__dirname + '../public/index.html'));
// });

app.use(express.static(path.join(__dirname, '/../public')));
// app.use(express.static(path.join(__dirname, '/../snes')));

// app.get('/snes', function(req, res) {
//     res.send();
// })

app.listen(3000, function() {
    console.log('Server started and listening on port 3000');
});