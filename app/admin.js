//import functions
import { buildNavBar, getTapes } from '../app/store-utils.js';
// import tapes from './tapes.js';
buildNavBar('Admin');

//get DOM elements
const adminForm = document.getElementById('admin');

// initialize state
const tapes = getTapes();

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
    const stringifiedTapes = JSON.stringify(tapes);
    localStorage.setItem('TAPES', stringifiedTapes);
});



