// items = JSON.parse(localStorage.getItem('add-item'));
// console.log(items);


let items;

if ((items = JSON.parse(sessionStorage.getItem('add-item'))) == null) {
    items = {
        cart: []
    };
    showCart();
} else {
    items = JSON.parse(sessionStorage.getItem('add-item'));
    showCart();
}

function addItems() {
    let cartItem = document.getElementById('add-item').value;
    let itemPrice = Number(document.getElementById('add-price').value);
    items.cart.push({ item: cartItem, price: itemPrice });
    console.log(cartItem, itemPrice);
    showCart();
    sessionStorage.setItem('add-item', JSON.stringify(items));
};

function showCart() {
    let myCart = document.getElementById('items-in-cart');
    let current = "";
    if (items.cart == "") {
        myCart.innerHTML = `<b>No items in cart!</b><hr>`;
    } else {
        items.cart.forEach(function (showItem) {
            current += (`<b>Item:</b> ${showItem.item} <br><b>Price:</b> $${showItem.price} <br><hr>`);
        });

        myCart.innerHTML = current;
    };
};

showCart();
// end of code