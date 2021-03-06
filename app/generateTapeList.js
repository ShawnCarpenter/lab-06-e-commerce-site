//Imports
import { addToCart, formatAsDollars } from './store-utils.js';

export function generateTapeList(obj) {
    const liEl = document.createElement('li');

    const h3El = document.createElement('h3');
    const imageEl = document.createElement('img');
    const titleEl = document.createElement('p');
    const artistEl = document.createElement('p');
    const genreEl = document.createElement('p');
    const priceEl = document.createElement('p');
    const quantityEl = document.createElement('input');
    const buttonEl = document.createElement('button');
    
    h3El.textContent = obj.title;
    h3El.classList.add('item-heading');

    imageEl.src = obj.coverImg;
    imageEl.alt = `${obj.title} cover image`;
    imageEl.classList.add('cover-photo');

    titleEl.textContent = obj.title;
    titleEl.classList.add('title');

    artistEl.textContent = obj.artist;
    artistEl.classList.add('artist');

    genreEl.textContent = obj.genre;
    genreEl.classList.add('genre');

    priceEl.textContent = `${formatAsDollars(obj.price)}`;   
    priceEl.classList.add('price');

    quantityEl.type = 'number';
    quantityEl.min = '1';
    quantityEl.value = 1;
    quantityEl.classList.add('quantity');


    buttonEl.value = obj.id;
    buttonEl.textContent = 'Add';
    //event listener for add button
    buttonEl.addEventListener('click', () => {
        const quantity = Number(quantityEl.value);
        addToCart(obj.id, quantity);
    });

    liEl.classList.add('album');
    liEl.append(h3El, imageEl, artistEl, titleEl, genreEl, priceEl, quantityEl, buttonEl);
    

    return liEl;
}