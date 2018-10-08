const express = require('express');
const hbs = require('hbs');
const app = express();

let path = require('path');
const data = require('./data');

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
    game1: 'super_mario_bros',
    game2: 'knight_rider',
    game3: 'the_legend_of_zelda',
    game4: 'megaman',
    game5: 'haunted',
    game6: 'raccoons',
    width: 250,
    height: 250
  });
});

app.get('/snes', (req, res) => {
  res.render('snes.hbs', {
    page: 'snes',
    system: 'snes',
    game1: 'super_mario_world',
    game2: 'super_mario_kart',
    game3: 'zelda_a_link_to_the_past',
    game4: 'star_fox_2',
    game5: 'metroid',
    game6: 'donkey_kong_country',
    width: 350,
    height: 250
  });
});

app.get('/n64', (req, res) => {
  res.render('n64.hbs', {
    page: 'n64',
    system: 'n64',
    game1: 'super_mario_64',
    game2: 'zelda_ocarina_of_time',
    game3: 'mario_kart_64',
    game4: 'super_smash_bros',
    game5: 'golden_eye',
    game6: 'mario_party_3',
    width: 350,
    height: 250
  });
});

app.get('*/:id', (req, res, next) => {
  console.log('Request Type:', req.params[0]);
  res.render('game.hbs', data.getData(req.params.id, req.params[1]));
});

app.listen(3000, function() {
    console.log('Server started and listening on port 3000');
});