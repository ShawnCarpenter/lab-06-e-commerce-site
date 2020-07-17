//import data and scripts
import { renderLineItem } from './render-line-item.js';
import { findByID, calcLinePrice, formatAsDollars, buildNavBar, getCart, clearCart, getTapes } from './store-utils.js';


// Get DOM elements
const cartTable = document.querySelector('#table-body');
const totalCell = document.querySelector('.total-box');
const buyButton = document.querySelector('#buy-button');
const clearButton = document.querySelector('#clear-button');

//initialize state
let grandTotal = 0;
buyButton.disabled = true;
const cart = getCart();
const tapes = getTapes();

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
    let message = 'Thank you for purchasing: ';
    cart.forEach(cartItem => {
        const purchasedItem = findByID(cartItem.id, tapes);
        message += `\n${cartItem.quantity} cop${cartItem.quantity > 1 ? 'ies' : 'y'} of ${purchasedItem.title}.`;
    });
    message += `\n Thank you for your purchase, your total is: ${grandTotal}`;
    alert(message);
    clearCart();
    window.location = 'index.html';
});

clearButton.addEventListener('click', () => {
    clearCart();
    location.reload();
});

totalCell.textContent = formatAsDollars(grandTotal);



