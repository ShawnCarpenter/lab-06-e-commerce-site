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
    imageEl.src = obj.coverImg;
    imageEl.alt = `${obj.title} cover image`;
    titleEl.textContent = obj.title;
    titleEl.classList.add('title');
    artistEl.textContent = obj.artist;
    artistEl.classList.add('artist');
    genreEl.textContent = obj.genreEl;
    genreEl.classList.add('genre');
    priceEl.textContent = `$${Number(obj.price).toFixed(2)}`;
    buttonEl.value = obj.id;
    buttonEl.textContent = 'Add';


    liEl.append(h3El, imageEl, titleEl, artistEl, genreEl, priceEl, buttonEl);
    

    return liEl;
}
