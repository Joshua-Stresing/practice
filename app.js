// import functions and grab DOM elements

import { animals } from './animals.js';
import { renderAnimal } from './utils.js';

import { games } from './games.js';
import { renderGames } from '/utils.js';

import { sodas } from './sodas.js';
import { renderSodas } from './utils.js';

import { musics } from './music.js';
import { renderMusic } from './utils.js';

const animalList = document.getElementById('animal-list');
// let state
for (let animal of animals) {
    const div = renderAnimal(animal);
    animalList.append(div);
}
const gameList = document.getElementById('game-list');

for (let game of games) {
    const div = renderGames(game);
    gameList.append(div);
}
const sodaList = document.getElementById('soda-list');

for (let soda of sodas) {
    const div = renderSodas(soda);
    sodaList.append(div);
}

const musicList = document.getElementById('music-list');

for (let music of musics) {
    const div = renderMusic(music);
    musicList.append(div);
}
// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
