let productContainer = document.querySelector(".row");
let cartProducts = document.querySelector(".cart");
let allProductsInCart = document.querySelector(".cart-product");
let links = document.querySelector(".links");
let logOutBtn = document.querySelector(".logout");
let badge = document.querySelector(".badge");
let userInfo = document.querySelector(".user-info");

// Logout button =================================================
if (localStorage.getItem("username")) {
  links.remove();
  logOutBtn.style.display = "block";
}
logOutBtn.addEventListener("click", function () {
  localStorage.clear();
  setTimeout(() => {
    window.location = "login.html";
  }, 1500);
});
// Products ========================================================
let products = [
  {
    id: 1,
    name: "vase",
    title: "Two-piece pottery vase",
    color: " off white",
    imgUrl: "./images/vase.jpg",
    price: 200,
  },
  {
    id: 2,
    name: "table accessory",
    title: "polyester table accessory-20 x 15",
    color: "black and white",
    imgUrl: "./images/antika1.jpg",
    price: 300,
  },
  {
    id: 3,
    name: "vase",
    title: "5-piece pottery vase set ",
    color: "multi-color",
    imgUrl: "./images/vas2.jpg",
    price: 250,
  },
  {
    id: 4,
    name: "vase",
    title: "polyester table accessory-20 x 15",
    color: "multi color",
    imgUrl: "./images/antika2.jpg",
    price: 400,
  },
  {
    id: 5,
    name: "vase",
    title: "pottery vase set",
    color: "black",
    imgUrl: "./images/vase3.jpg",
    price: 450,
  },
  {
    id: 6,
    name: "vase",
    title: "Two-piece pottery vase set",
    color: "cashmere and beige",
    imgUrl: "./images/vase4.jpg",
    price: 400,
  },
  {
    id: 7,
    name: "table accessory",
    title: "polyester table accessory-20 x 15",
    color: "multi color",
    imgUrl: "./images/antika3.jpg",
    price: 300,
  },
  {
    id: 8,
    name: "table accessory",
    title: "polyester table accessory-20 x 15",
    color: "black and white",
    imgUrl: "./images/antika4.jpg",
    price: 350,
  },
  {
    id: 9,
    name: "vase",
    title: "pottery vase ",
    color: "gold",
    imgUrl: "./images/vase10.jpg",
    price: 200,
  },
  {
    id: 10,
    name: "table accessory",
    title: "polyester table accessory-20 x 15",
    color: "multi color",
    imgUrl: "./images/antika7.jpg",
    price: 300,
  },
  {
    id: 11,
    name: "vase",
    title: "pottery vase ",
    color: "gold",
    imgUrl: "./images/vase6.jpg",
    price: 200,
  },
  {
    id: 12,
    name: "table accessory",
    title: "polyester table accessory-20 x 15",
    color: "multi color",
    imgUrl: "./images/antika5.jpg",
    price: 400,
  },
  {
    id: 13,
    name: "vase",
    title: "pottery vase ",
    color: "black",
    imgUrl: "./images/vase8.jpg",
    price: 600,
  },
  {
    id: 14,
    name: "table accessory",
    title: "polyester table accessory-20 x 15",
    color: "multi color",
    imgUrl: "./images/antika6.jpg",
    price: 500,
  },
  {
    id: 15,
    name: "vase",
    title: "pottery vase ",
    color: "white",
    imgUrl: "./images/vase9.jpg",
    price: 300,
  },
  {
    id: 16,
    name: "vase",
    title: "pottery vase ",
    color: "beige",
    imgUrl: "./images/vase11.jpg",
    price: 200,
  },
  {
    id: 17,
    name: "table accessory",
    title: "polyester table accessory-20 x 15",
    color: "Multi-colored ",
    imgUrl: "./images/antika8.jpg",
    price: 200,
  },
  {
    id: 18,
    name: "vase",
    title: "pottery vase ",
    color: "offwhite",
    imgUrl: "./images/vase5.jpg",
    price: 200,
  },
];

// Draw items ===================================================
function drawItems() {
  let productItem = products
    .map((product) => {
      return `
      <div class="col-lg-4 col-md-6 col-sm-12">
        <div class="product">
          <div class="card">
            <img src=${product.imgUrl} class="card-img-top overflow-hidden" alt="...">
            <div class="card-body">
              <h5 class="card-title">${product.name}</h5>
              <p class="card-text">${product.title}</p>
              <p class="card-text">color : ${product.color}</p>
              <button class="btn btn-primary add-to-cart" onClick="addToCart(${product.id})">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>`;
    })
    .join("");
  productContainer.innerHTML = productItem;
}

drawItems();

// Initialize cart items and badge =====================================
let allOfItems = localStorage.getItem("productInCart")
  ? JSON.parse(localStorage.getItem("productInCart"))
  : [];
drawCartItems();

// Draw cart items =====================================================
function totalPrice() {
  return allOfItems.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );
}

function drawCartItems() {
  allProductsInCart.innerHTML = "";

  if (allOfItems.length > 0) {
    allOfItems.map((item) => {
      allProductsInCart.innerHTML += `
        <div class="cart-item" id="item-${item.id}">
          <span>${item.name} - Quantity: ${item.quantity}</span>
          <button class="btn btn-danger mt-1" onClick="removeFromCart(${item.id})">Remove</button>
        </div>`;
    });

    allProductsInCart.innerHTML += `<p>Total price is: ${totalPrice()}</p>`;
  } else {
    allProductsInCart.innerHTML = "<p>No items in cart.</p>";
  }

  badge.innerHTML = allOfItems.reduce(
    (total, item) => total + item.quantity,
    0
  );
}

// Remove from cart =================================================
function removeFromCart(id) {
  let foundItem = allOfItems.find((item) => item.id === id);
  if (foundItem) {
    foundItem.quantity--;
    if (foundItem.quantity === 0) {
      allOfItems = allOfItems.filter((item) => item.id !== id);
    }
    localStorage.setItem("productInCart", JSON.stringify(allOfItems));
    drawCartItems();
  }
}
// Add to cart =======================================================
if (localStorage.getItem("username")) {
  function addToCart(id) {
    let chosenItem = products.find((item) => item.id === id);
    let itemInCart = allOfItems.find((item) => item.id === id);

    if (itemInCart) {
      itemInCart.quantity++;
    } else {
      allOfItems.push({ ...chosenItem, quantity: 1 });
    }

    localStorage.setItem("productInCart", JSON.stringify(allOfItems));
    drawCartItems();
  }
}
// Toggle cart display ==============================================
cartProducts.addEventListener("click", openCart);
function openCart() {
  if (allProductsInCart.style.display === "block") {
    allProductsInCart.style.display = "none";
  } else {
    allProductsInCart.style.display = "block";
  }
}
