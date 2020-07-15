//import data and scripts

import cart from './cart-items.js';
import tapes from './tapes.js';

import { renderLineItem } from './render-line-item.js';
import { findByID, calcLinePrice, formatAsDollars, buildNavBar } from './store-utils.js';

// Get DOM elements

const cartTable = document.querySelector('#table-body');
const totalCell = document.querySelector('.total-box');
let grandTotal = 0;
//the magic happens here.
buildNavBar('Cart');

cart.forEach(cartItem => {
    const product = findByID(cartItem.id, tapes);
    const newRow = renderLineItem(product, cartItem.quantity);
    cartTable.append(newRow);
    grandTotal += calcLinePrice(product.price, cartItem.quantity);
});

totalCell.textContent = formatAsDollars(grandTotal);



