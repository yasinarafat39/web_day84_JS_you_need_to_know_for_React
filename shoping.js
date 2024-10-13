const addToCard = () => {
    const productField = document.getElementById('product')
    const productQuantity = document.getElementById('quantity') 
    displayProduct(productField.value, productQuantity.value)
    saveProductToLocalStorage(productField.value, productQuantity.value)
    productField.value = ''
    productQuantity.value = ''
}


const displayProduct = (product, quantity) => {
    const ul = document.getElementById('productContainer') 
    const li = document.createElement('li')
    li.innerText = `${product} : ${quantity}`
    ul.insertAdjacentElement('beforeend', li) 
}


const getStoredShopingCart = () => {
    const storedCart = window.localStorage.getItem('cart');
    return storedCart? JSON.parse(storedCart) : {};
}

const saveProductToLocalStorage = (product, quantity) => {
    const savedcart = getStoredShopingCart();
    savedcart[product] = quantity;
    const stringifiedCard = JSON.stringify(savedcart)
    window.localStorage.setItem('cart', stringifiedCard)
}

const displayProductFromLocalStorage = () => {
    const savedcart = getStoredShopingCart();
    for(let product in savedcart){
        const quantity = savedcart[product];
        console.log(product, quantity)
        displayProduct(product, quantity)
    }
}

displayProductFromLocalStorage()