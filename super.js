let cart = [];
//this contains the products we have in the SM.
let products = []; //think of this as the storage.

let product = document.getElementById('product');
let productName = document.getElementById('productName');
let btnAddProduct = document.getElementById('addProduct');
let unitPrice = document.querySelector('#productPrice');
let stock = document.querySelector('#stock');
let quantity = document.querySelector('#quantity');
let btnAddToCart = document.getElementById("addCart");
let btnTotal = document.querySelector('#total');
let message = document.getElementById('message');
let firstNameInput = document.getElementById('first');
let lastNameInput = document.getElementById('last');
let nameFirst = document.getElementById("nameFirst");
let nameLast = document.getElementById("nameLast");

//handler for the click of hte btnAddCart
/**
 * When the storekeeper is adding a product to the SM 
 * he/she will add name, price and stock and hit the add product buttn 
 */

 btnAddProduct.addEventListener('click', function(){
     let product = {};
     product.unitPrice = unitPrice.value;
     product.stock = stock.value;
     product.name = productName.value;

    products.push(product);  
 });

btnAddToCart.addEventListener('click', function(){
    if (product.value != "" && unitPrice.value != "" && quantity.value != "") {
        let item = {};
        item.product = product.value;
        item.unitPrice = unitPrice.value;
        item.quantity = quantity.value;
        cart.push(item);
    } else {
        message.classList.add('error');
        message.innerHTML = "Please provide all product, price and quantity to proceed";
    }
    console.log(cart);
});
btnTotal.addEventListener('click', function(){
    let total = 0;
    for (let i = 0; i < cart.length ; i++) {
        total = total + (cart[i].unitPrice * cart[i].quantity);
    }
    message.innerHTML = "The total price is $" + total;
});
/**
 * Here is how the event for the keyup is captured.
 * Everytime the key is pressed and released it will come here 
 * 
 * Whatever typed on the first name input box can be found from the 
 * this.value. Where "this" represents the current element we are dealing with.
 */
firstNameInput.addEventListener('keyup', function(){
    nameFirst.innerHTML = this.value;
});
lastNameInput.addEventListener('keyup', function(){
    nameLast.innerHTML = this.value;
});