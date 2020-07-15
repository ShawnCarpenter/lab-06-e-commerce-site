import { formatAsDollars } from './store-utils.js';

export function renderLineItem(product, quantity) {
    const price = formatAsDollars(product.price);
    const totalPrice = formatAsDollars(product.price * quantity);
    const liEl = document.createElement('tr');
    liEl.classList.add('items-row');
    
    
    const titleEl = document.createElement('td');
    titleEl.textContent = product.title;
    
    const priceEl = document.createElement('td');
    priceEl.classList.add('currency');
    priceEl.textContent = price;

    const amountEl = document.createElement('td');
    amountEl.textContent = quantity;

    
    const totalEl = document.createElement('td');
    totalEl.classList.add('currency');
    totalEl.textContent = `${totalPrice}`;


    liEl.append(titleEl, priceEl, amountEl, totalEl);

    return liEl;
}