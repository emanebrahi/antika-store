let productsInCart = localStorage.getItem("productInCart");
let productsDisplay = document.querySelector(".row");

if (productsInCart) {
  let Product = JSON.parse(productsInCart);
  drawProductsItems(Product);
}
function drawProductsItems(products) {
  if (products.length > 0) {
    let allProductsInCart = products
      .map((item) => {
        return `
        <div class="col-lg-4 col-md-6 col-sm-12">
          <div class="product">
            <div class="card">
              <img src=${item.imgUrl} class="card-img-top overflow-hidden" alt="...">
              <div class="card-body">
                <h5 class="card-title">${item.name}</h5>
                <p class="card-text">${item.title}</p>
                <button class="btn btn-danger" onClick="removeFromCart(${item.id})">Remove from cart</button>
              </div>
            </div>
          </div>
        </div>`;
      })
      .join("");
    productsDisplay.innerHTML = allProductsInCart;
  } else {
    productsDisplay.innerHTML = `<p class="no-items-in-cart">No items in cart</p>`;
  }
}

function removeFromCart(id) {
  productsInCart = JSON.parse(localStorage.getItem("productInCart"));
  let choosenItemremoved = productsInCart.filter((item) => item.id != id);
  localStorage.setItem("productInCart", JSON.stringify(choosenItemremoved));
  drawProductsItems(choosenItemremoved);
}
