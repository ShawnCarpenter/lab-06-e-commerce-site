//import functions
import { buildNavBar, getTapes, formatAsDollars, saveData } from '../app/store-utils.js';

//get DOM elements
const adminForm = document.getElementById('add-form');


// initialize state
const tapes = getTapes();
buildNavBar('Admin');
createProductsTable();
//add event listeners and process data

adminForm.addEventListener('submit', e => {
    e.preventDefault();
    const data = new FormData(adminForm);

    const newTape = {
        id: data.get('id'),
        title: data.get('title'),
        artist: data.get('artist'),
        description: data.get('description'),
        coverImg: data.get('cover-img'),
        genre: data.get('genre'),
        price: Number(data.get('price')).toFixed(2),
    
    };
    tapes.push(newTape);
    saveData('TAPES', tapes);
});

function createProductsTable() {
    const productsTableBody = document.getElementById('inventory'); 
    tapes.forEach(tape => {
        const rowEl = document.createElement('tr');
        const idEl = document.createElement('td');
        const titleEl = document.createElement('td');
        const priceEl = document.createElement('td');
        const removeEl = document.createElement('td');
        const buttonEl = document.createElement('button');

        idEl.textContent = tape.id;
        titleEl.textContent = tape.title;
        priceEl.textContent = formatAsDollars(tape.price);
        buttonEl.value = tape.id;
        buttonEl.textContent = 'Remove';
        buttonEl.addEventListener('click', () => {
            removeInventoryItem(tape.id, tapes);
        });
        removeEl.append(buttonEl);
        
        rowEl.append(idEl, titleEl, priceEl, removeEl);
        productsTableBody.appendChild(rowEl);
    });
}


function removeInventoryItem(id) {
    for (let i = 0; i < tapes.length; i++) {
        if (tapes[i].id === id) tapes.splice(i, 1);
    }
    saveData('TAPES', tapes);
}


