const express = require('express');
const hbs = require('hbs');

const port = process.env.PORT || 3000;
const app = express();

let path = require('path');
const data = require('./data');
const list = require('./gameList')

hbs.registerPartials(path.join(__dirname + './../views/partials'));
app.set('view engine', 'hbs');

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
  res.render('index.hbs', list.getGameList('nes'));
});

app.get('/snes', (req, res) => {
  res.render('snes.hbs', list.getGameList('snes'));
});

app.get('/n64', (req, res) => {
  res.render('n64.hbs', list.getGameList('n64'));
});

app.get('*/:id', (req, res, next) => {
  res.render('game.hbs', data.getData(req.params.id, req.params[0]));
});

app.listen(port, function() {
  console.log(`Server started and listening on port ${port}`);
});