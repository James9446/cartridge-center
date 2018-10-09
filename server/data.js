let getData = (game, system) => {
  let width;
  let height;
  if (system === '/nes') {
    width = 550,
    height = 550
  } else {
    width = 850,
    height = 550
  }
  let gameObject = {
    game: game,
    system: system,
    width: width,
    height: height
  }
  return gameObject;
};

module.exports.getData = getData;