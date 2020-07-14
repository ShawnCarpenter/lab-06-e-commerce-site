export function generateTapeList(obj) {
    const liEl = document.createElement('li');

    const h3El = document.createElement('h3');
    const imageEl = document.createElement('img');
    const titleEl = document.createElement('p');
    const artistEl = document.createElement('p');
    const genreEl = document.createElement('p');
    const priceEl = document.createElement('p');
    const buttonEl = document.createElement('button');
    
    h3El.textContent = obj.title;
    h3El.classList.add('item-heading');

    imageEl.src = obj.coverImg;
    imageEl.alt = `${obj.title} cover image`;
    imageEl.classList.add('cover-photo');

    titleEl.textContent = obj.title;
    titleEl.classList.add('title');

    artistEl.textContent = obj.artist;
    artistEl.classList.add('artist');

    genreEl.textContent = obj.genre;
    genreEl.classList.add('genre');

    priceEl.textContent = `$${Number(obj.price).toFixed(2)}`;   
    priceEl.classList.add('price');

    buttonEl.value = obj.id;
    buttonEl.textContent = 'Add';

    liEl.classList.add('album');
    liEl.append(h3El, imageEl, artistEl, titleEl, genreEl, priceEl, buttonEl);
    

    return liEl;
}

export function findByID (cartItem, productsArray) {
    let product = null;

    for (let i = 0; i < productsArray.length; i++) {
        if (cartItem === productsArray[i].id) return productsArray[i];
    }

    return product;
}
