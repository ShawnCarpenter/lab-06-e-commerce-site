//import data and scripts
import tapes from './tapes.js';

import { renderLineItem } from './render-line-item.js';
import { findByID, calcLinePrice, formatAsDollars, buildNavBar, getCart, clearCart } from './store-utils.js';

const cart = getCart();
// Get DOM elements

const cartTable = document.querySelector('#table-body');
const totalCell = document.querySelector('.total-box');
const buyButton = document.querySelector('#buy-button');
const clearButton = document.querySelector('#clear-button');

//initialize state

let grandTotal = 0;
buyButton.disabled = true;
//the magic happens here.

buildNavBar('Cart');

function buildCart() {

    cart.forEach(cartItem => {
        const product = findByID(cartItem.id, tapes);
        const newRow = renderLineItem(product, cartItem.quantity);
        cartTable.append(newRow);
        grandTotal += calcLinePrice(product.price, cartItem.quantity);
    });
    if (cartTable.children.length > 0) buyButton.disabled = false;
}

buildCart();

buyButton.addEventListener('click', () => {
    alert('Gimme money');
    clearCart();
    location.reload();
});

clearButton.addEventListener('click', () => {
    clearCart();
    location.reload();
});

totalCell.textContent = formatAsDollars(grandTotal);



