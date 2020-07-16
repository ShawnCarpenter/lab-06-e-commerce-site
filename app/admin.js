//import functions
import { buildNavBar } from '../app/store-utils.js';
buildNavBar('Admin');

//get DOM elements
const adminForm = document.getElementById('admin');

//add event listeners and process data

adminForm.addEventListener('submit', e => {
    e.preventDefault();
    const formData = new FormData(adminForm);

    const newTape = {
        id: formData.get('id'),
        title: formData.get('title'),
        artist: formData.get('artist'),
        description: formData.get('description'),
        coverImg: formData.get('cover-img'),
        genre: formData.get('genre'),
        price: Number(formData.get('price')).toFixed(2),
    
    };
   console.table(newTape); 
});



