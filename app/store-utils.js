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
    const roundedNumber = Math.round(Number(num) * 100) / 100;
    return `$${roundedNumber}`;
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
        } , 
        {
            name: 'Cart',
            url: 'cart.html'
        },
        {
            name: 'Login',
            url: './test/index.html'
        }];
    const navbar = document.querySelector('.nav-bar');
    pages.forEach(item => {
        const navAnchor = document.createElement('a');
        const navLi = document.createElement('li');
        
        navAnchor.href = item.url;
        if (page === item.name) navAnchor.className = 'current-nav';
        navLi.textContent = item.name;
        
        navAnchor.appendChild(navLi);
        navbar.appendChild(navAnchor);   
    });    
    // return navbar;
}