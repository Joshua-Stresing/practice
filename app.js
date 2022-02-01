// import functions and grab DOM elements
import { animals } from './animals.js';
import { renderAnimal } from './utils.js';
import { games } from './games.js';
import { renderGames } from '/utils.js';

console.log(animals);
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
// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
