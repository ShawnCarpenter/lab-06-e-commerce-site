//import initial inventory data.

import tapes from './tapes.js';

export function findByID(cartItem, productsArray) {
    let product = null;

    for (let i = 0; i < productsArray.length; i++) {
        if (cartItem === productsArray[i].id) return productsArray[i];
    }

    return product;
}

export function calcLinePrice(price, quantity) {
    const rawTotal = Number(price) * Number(quantity);
    const total = Math.round(rawTotal * 100) / 100;
    return total;
}

export function formatAsDollars(num) {
    const roundedNumber = (Math.round(Number(num) * 100) / 100).toFixed(2);
    return `$${roundedNumber}`;
}

export function calcOrderTotal(cart, tapes) {
    let total = 0;
    cart.forEach(cartItem => {
        const product = findByID(cartItem.id, tapes);
        total += calcLinePrice(product.price, cartItem.quantity);
    });

    return total;
}
export function buildNavBar(page) {
    const pages = [
        {
            name: 'Home',
            url: 'index.html'
        },
        {
            name:'Catalog',
            url: 'catalog.html'
        }, 
        {
            name: 'Cart',
            url: 'cart.html'
        },
        {
            name: 'Admin',
            url: 'admin.html'
        }];
    const navBar = document.querySelector('.nav-bar');
    pages.forEach(item => {
        const navAnchor = document.createElement('a');
        const navLi = document.createElement('li');
        
        navAnchor.href = item.url;
        // navAnchor.textContent = ' ';
        if (page === item.name) navLi.classList.add('current-nav') ;
        navLi.textContent = item.name;
        
        navAnchor.appendChild(navLi);
        navBar.appendChild(navAnchor);   
    });    
}

export function getCart() {
    let cart = null;
    const rawCart = localStorage.getItem('CART');
    if (rawCart) {
        cart = JSON.parse(rawCart);
    } else {
        cart = [];
    }
    return cart;
}

export function addToCart(cartId, addQuantity) {
    const tempCart = getCart() || [];
    const foundItem = findByID(cartId, tempCart);

    if (foundItem) {
        foundItem.quantity += addQuantity;
    } else {
        let newItem = {
            id: cartId,
            quantity:addQuantity
        };
        tempCart.push(newItem);
    }
    
    saveData('CART', tempCart);
}

export function clearCart() {
    localStorage.removeItem('CART');
}

export function getTapes() {
    const rawTapes = localStorage.getItem('TAPES');
    
    if (rawTapes) { 
        const newTapes = JSON.parse(rawTapes);    
        return newTapes;
    }

    const stringifiedTapes = JSON.stringify(tapes);
    localStorage.setItem('TAPES', stringifiedTapes);
    
    return tapes;
}

export function saveData(key, data) {
    const stringifiedData = JSON.stringify(data);
    localStorage.setItem(key, stringifiedData);
}

export function removeInventoryItem(id, tapeArray) {
    for (let i = 0; i < tapeArray.length; i++) {
        if (tapeArray[i].id === id) tapeArray.splice(i, 1);
    }
    saveData('TAPES', tapeArray);
}
