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
let  totalCartSize=document.getElementById("totalCartSize");                  
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
         validationBorder(stock)
         validationBorder(unitPrice)
         validationBorder(productName)
    
    }
    validationBorder(firstNameInput)
    validationBorder(lastNameInput)
    console.log(products);
});
btnAddToCart.addEventListener('click', function(){
        if (productImput.value != "" && unitPrice.value != "" && quantity.value != "") {
            let item = {};
            item.productName = productImput.value;
            item.unitPrice = unitPrice.value;
            item.quantity = quantity.value;
        
            cart.push(item);
            totalCartSize.innerHTML=item.quantity
            message.innerHTML = "Successfully added " + item.productName + " to the cart !";
        } else {
            validationBorder(productImput)
            validationBorder(quantity)
            message.innerHTML = "Please provide all product, price and quantity to proceed";
        }
        console.log(cart);

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
         message.innerHTML = total;
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
quantity.addEventListener('click', function(){
    for(var i=0;i < products.length;i++){
      if(productImput.value !=products[i].name){
          alert("product is not avel");
      }
    }
});
//a function for error input box, created here & we used it throughout the code
function validationBorder(element){
    if(element.value==''){
        element.classList.add("error-input")
    }else{
        element.classList.remove("error-input")
    }
}
btnInventory.addEventListener('click', function(){
    let lowEnventery=[];
    var table = "";
    for(var p=0;p<products.length;p++) {
        if(products[p].stock<=10){
            lowEnventery.push(products[p]);
            table+="<tr>";
            table+="<td>"+products[p].name+"</td>";
            table+="<td>"+products[p].stock+"</td>"; 
            table+="</tr>";
        }else {
            //we coudn't come up with any better methods to display "there is no low inventories" 
            document.write("there is No Low inventories");  
        }
        document.write("<table border=1>"+table + "</table>");
        
 }
 });
