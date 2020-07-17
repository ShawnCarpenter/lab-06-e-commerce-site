// import functions and grab DOM elements
import { generateTapeList } from '../app/generateTapeList.js';
import { buildNavBar, getTapes } from '../app/store-utils.js';
const productList = document.querySelector('#product-list');

// initialize state
const tapes = getTapes();

// set event listeners to update state and DOM
buildNavBar('Catalog');

tapes.forEach(tape => {
    productList.appendChild(generateTapeList(tape));
});

