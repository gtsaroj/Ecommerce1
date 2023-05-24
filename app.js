const product1 = document.querySelector(".pro-container");

var CartItemEl = document.querySelector(".cart");

function RenderProductEl() {
    products.forEach((product) => {
        product1.innerHTML += `
          
        <div class="pro">
        <img src="${product.imgSrc}" alt="">
        <div class="description">
            <span>Model 05</span>
            <h5>${product.name}</h5>
            <div class="star">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
            </div>
            <h4>${product.price}</h4>
        </div>
       <div onclick ="addToCart(${product.id})"> <i class="fa fa-shopping-cart cart"></i></div>
    </div>`
    })
}
RenderProductEl();

// cart array
let cart = [];
// add to cart
function addToCart(id) {
    // check if items already exist
    if (cart.some((item) => item.id === id)) {
        alert("items already exist");
    }
    else {
        const item = products.find((product) => product.id === id)
        cart.push({
            ...item,
            numberOfUnits: 1,

        });
    }
    UpdateCart();

};

// update cart
function UpdateCart() {
    renderCartItems();
}

// render cart items
function renderCartItems() {
    cart.forEach((item) => {
        CartItemEl.innerHTML +=
            `<div class="Cart-items">
            <table>
                <thead>
                    <tr>
                        <td>Remove</td>
                        <td>Image</td>
                        <td>Price</td>
                        <td>Quantity</td>
                        <td>SubTotal</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><i class="far fa-times-circle"></i></td>
                        <td><img src="3.jpg" alt=""></td>
                        <td>${item.price}</td>
                        <td><input type="number" alt="" value="1"></td>
                        <td>$118.39</td>
                    </tr>
                </tbody>
            </table>

        </div>
         `
    })
}

