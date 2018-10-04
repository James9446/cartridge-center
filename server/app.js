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
  res.redirect('/nes');
});

app.get('/nes', (req, res) => {
  res.render('index.hbs', {
    page: 'index',
    system: 'nes',
    game1: 'mario',
    game2: 'knight_rider',
    game3: 'zelda',
    game4: 'megaman',
    game5: 'haunted',
    game6: 'raccoons'
  });
});

// app.get('/nes/id', (req, res) => {
//   res.send(You are the MAN!!!!!)
  // res.render('game.hbs', {
  //   page: id,
  //   game: id
  // });
// });

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

app.get('/nes/:id', (req, res, next) => {
  // console.log('Request Type:', req.params.id);
  res.render('game.hbs', {
    page: req.params.id,
    game: req.params.id
  });
});

// app.get('/games', function(req, res) {
//     callAPI.gameData((data) => res.send(data));
// });

app.listen(3000, function() {
    console.log('Server started and listening on port 3000');
});