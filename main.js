let items = {
    cart: []
};

function addItems() {
    let cartItem = document.getElementById('add-item').value;
    let itemPrice = Number(document.getElementById('add-price').value);
    items.cart.push({ item: cartItem, price: itemPrice });
    console.log(cartItem, itemPrice);
    showCart();
    localStorage.setItem('add-item', JSON.stringify(items));
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
