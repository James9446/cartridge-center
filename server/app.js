const express = require('express');
const hbs = require('hbs');
const app = express();

let path = require('path');

hbs.registerPartials(path.join(__dirname + './../views/partials'));
app.set('view engine', 'hbs');

// const callAPI = require('./api.js');
// console.log('test', gameData.gameData.getGames());
// callAPI.gameData(console.log);


app.use(express.static(path.join(__dirname, '../public')));


hbs.registerHelper('isIndexActive', (page) => {
  if (page === 'index') {
    return 'active'
  }
  return null;
});

hbs.registerHelper('isSnesActive', (page) => {
  if (page === 'snes') {
    return 'active'
  }
  return null;
});

hbs.registerHelper('isN64Active', (page) => {
  if (page === 'n64') {
    return 'active'
  }
  return null;
});

app.get('/', (req, res) => {
  res.render('index.hbs', {
    page: 'index'
  });
});

app.get('/snes', (req, res) => {
  res.render('snes.hbs', {
    page: 'snes'
  });
});

app.get('/n64', (req, res) => {
  res.render('n64.hbs', {
    page: 'n64'
  });
});

// app.get('/games', function(req, res) {
//     callAPI.gameData((data) => res.send(data));
// });

app.listen(3000, function() {
    console.log('Server started and listening on port 3000');
});