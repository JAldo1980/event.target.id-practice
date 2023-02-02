const container = document.getElementById("container");

const products = [
  {
    name: "Ostrich Pillow",
    price: "10",
    image: "ostrichpillow.jpg",
    id: "ostrich-pillow",
  },
  {
    name: "Bacon Bandages",
    price: "8",
    image: "bacon-bandage.jpg",
    id: "bacon-bandages",
  },
  {
    name: "Baby Mop",
    price: "20",
    image: "babymop.jpg",
    id: "baby-mop",
  },
];

let productsHtml = ``;

for (let product of products) {
  productsHtml += `
    <div class="product">
        <h3>${product.name}</h3>
         <h4> £${product.price}</h4>
        <img src="${product.image}">
        <button id="${product.id}">Buy Now</button>
    </div>
    `;
}
container.innerHTML = productsHtml;

container.addEventListener("click", function (e) {
  console.log(e.target.id);
});

// to access a parent element when the parent element has no ID

// container.addEventListener("click", function (e) {
// document.getElementById(e.target.id).parentElement.style.backgroundColor = lightblue;
// });

// geElementsByClassName

clearBtn.addEventListener("click", function () {
  const productsArray = document.getElementsByClassName("product");
  for (let product of productsArray) {
    product.classList.remove("purchased");
  }
});
