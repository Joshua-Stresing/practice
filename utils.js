export function renderAnimal(animal) {
    const div = document.createElement('div');
    div.classList.add('animal');
    // h2 element
    const h2 = document.createElement('h2');
    h2.textContent = animal.type.toUpperCase();
    // image
    const img = document.createElement('img');
    img.src = `./assets/${animal.image}`;

    // p
    const p = document.createElement('p');
    p.textContent = `${animal.class} with ${animal.numberOfLegs} legs and a cuteness rating of ${animal.cuteness}.`;
    div.append(h2, img, p);
    return div;
}
export function renderGames(games) {
    const div = document.createElement('div');
    div.classList.add('games');

    const p = document.createElement('p');
    p.textContent = `${games}`;
    div.append(p);
    return div;
}

export function renderSodas(soda) {
    const div = document.createElement('div');
    div.classList.add('soda');
    const h2 = document.createElement('h2');
    h2.textContent = soda.name.toUpperCase();
    const p = document.createElement('p');
    p.textContent = `Calories-${soda.nutrition.calories} in ${soda.nutrition.servingSize} serving.`;
    div.append(h2, p,);
    return div;
}
