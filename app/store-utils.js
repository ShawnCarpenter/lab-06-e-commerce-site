export function findByID(cartItem, productsArray) {
    let product = null;

    for (let i = 0; i < productsArray.length; i++) {
        if (cartItem === productsArray[i].id) return productsArray[i];
    }

    return product;
}

export function calcLineItem(price, quantity) {
    const rawTotal = Number(price) * Number(quantity);
    const total = Math.round(rawTotal * 100) / 100;
    return total;
}
