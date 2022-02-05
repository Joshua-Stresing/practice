// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { renderAnimal, renderGames, renderMusic, renderSodas } from '../utils.js';

const test = QUnit.test;

test('renderAnimal should return a <div> with dog info', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<div class="animal"><h2>DOG</h2><img src="./assets/icons8-dog-100.png"><p>Mammal with 4 legs and a cuteness rating of 10.</p></div>`;

    //Act
    // Call the function you're testing and set the result to a const
    const actual = renderAnimal(
        {
            type: 'dog',
            numberOfLegs: 4,
            class: 'Mammal',
            cuteness: 10,
            image: 'icons8-dog-100.png',
        }
    );

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});

test('render music should return rap info', (expect) => {
    const expected = '<div class="music"><h2>RAP</h2><p>Eminem,Tupac,DMX .</p></div>';

    const actual = renderMusic(
        {
            genre: 'Rap',
            musicians:['Eminem', 'Tupac', 'DMX']
        }
    );
    expect.equal(actual.outerHTML, expected);    
});


test ('render soda should return soda info', (expect) => {
    const expected = '<div class="soda"><h2>COKE</h2><p>Calories-140 in 12oz serving.</p></div>';
    
    const actual = renderSodas(
        {
            name: 'Coke',
            nutrition: {
                calories: '140',
                servingSize: '12oz',
            }
        },
    );
    expect.equal(actual.outerHTML, expected); 
});

test('render game should return game info', (expect) => {
    const expected = '<div class="games"><p>Road Rash</p></div>';
    
    const actual = renderGames('Road Rash');
    expect.equal(actual.outerHTML, expected); 
});