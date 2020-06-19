let cart = [];
//this contains the products we have in the SM.
let products = []; //think of this as the storage.
let productImput = document.getElementById('product');
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
let PlasticBag = document.getElementById('plasticBag');
let selectedState = document.querySelector("#inlineFormCustomSelect");
let btnInventory = document.getElementById("lowInventory");
let stockBalance = document.querySelector('#stock'); 
let total = 0;
//handler for the click of hte btnAddCart
/**
 * When the storekeeper is adding a product to the SM 
 * he/she will add name, price and stock and hit the add product buttn 
 */
 btnAddProduct.addEventListener('click', function(){
    
    if (productName.value != ""
        && unitPrice.value != "" && unitPrice.value > 0
        && stock.value != "" && stock.value >= 0){
        let product= {}; 
     product.unitPrice = unitPrice.value;
     product.stock = stock.value;
     product.name = productName.value;
     products.push(product);
     stockBalance.innerHTML = stock.value=+stock.value;
     console.log(products);
    }else{
        message.classList.add('error');
        message.innerHTML = "Please provide all product, price and quantity to proceed";
    }
    console.log(products);
});
btnAddToCart.addEventListener('click', function(){
        if (productImput.value != "" && unitPrice.value != "" && quantity.value != "") {
            let item = {};
            item.productName = productImput.value;
            item.unitPrice = unitPrice.value;
            item.quantity = quantity.value;
            cart.push(item);
            message.innerHTML = "Successfully added " + item.productName + " to the cart !";

        } else {
            message.classList.add('error');
            message.innerHTML = "Please provide all product, price and quantity to proceed";
        }
        console.log(cart);
    });
    btnAddProduct.addEventListener('click', function(){
        if( stock.value<=0){
            alert ("eror");
        }
    });
    btnTotal.addEventListener('click', function(){
        
        let tax = 0;
        for (let i = 0; i < cart.length ; i++) {
            total = total + (cart[i].unitPrice * cart[i].quantity);
        }
        tax = total *parseFloat(selectedState.value) / 100;
        total = total + tax;

        message.innerHTML = "The total price is $" + total;
    });
    PlasticBag.addEventListener('click', function(){
     if(PlasticBag.checked){
      total += 0.15
         message.innerHTML =  "The total price is $" + total;
     } else {
         total -= 0.15
         message.innerHTML = "The total price is $" + total;
     
     
        }
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



btnInventory.addEventListener('click',function(){
    if(products.filter(s=>s.stock<10)==null){
        message.innerHTML = "there is No Low inventories";  
    }else{

    }
})