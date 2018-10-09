const getGameList = (system) => {
  let gameListObject;
  if (system === 'nes') {
    gameListObject = {
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
    }
  } else if (system === 'snes') {
    gameListObject = {
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
    }
  } else if (system === 'n64') {
    gameListObject = {
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
    }
  }
  return gameListObject;
};

module.exports.getGameList = getGameList;