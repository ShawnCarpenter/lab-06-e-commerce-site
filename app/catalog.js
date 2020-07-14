// import functions and grab DOM elements
import { generateTapeList } from '../app/generateTapeList.js';

import tapes from '../app/tapes.js';
// initialize state
const productList = document.querySelector('#product-list');
// set event listeners to update state and DOM

tapes.forEach(tape => {
    productList.appendChild(generateTapeList(tape));
});
