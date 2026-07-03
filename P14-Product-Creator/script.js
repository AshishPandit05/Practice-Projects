let createProduct = document.querySelector(".create-product");
let formDiv = document.querySelector(".form-div");
let close = document.querySelector("#close");
let cardContainer = document.querySelector(".card-container");
let form = document.querySelector("form");

let productArr = [];
let updateIndex = null;

createProduct.addEventListener("click", () => {
  formDiv.style.display = "flex";
});

close.addEventListener("click", () => {
  formDiv.style.display = "none";
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let productName = event.target[0].value;
  let description = event.target[1].value;
  let price = event.target[2].value;
  let image = event.target[3].value;

  let obj = {
    productName,
    description,
    price,
    image,
  };

  if (productName.trim() === "" || description.trim() === "" || price === " ") {
    return alert("fill the all feild");
  }

  if (updateIndex !== null) {
    productArr[updateIndex] = obj;
    updateIndex = null;
  } else {
    productArr.push(obj);
  }

  ui();
  form.reset();
});

let ui = () => {
  cardContainer.innerHTML = "";
  productArr.forEach((elem, index) => {
    cardContainer.innerHTML += `<div class="card">
          <div class="img">
            <img
              src="${elem.image}"
            />
          </div>
          <div id="card-detail">
            <div class="name">Name - ${elem.productName}</div>
            <div class="des">Description - ${elem.description}</div>
            <div class="price">Price - ${elem.price}</div>
          </div>
          <div class="btn">
            <button  onclick="updateProduct('${elem.productName}')" class="edit">Update</button>
            <button onclick="deleteProduct('${index}')" class="delete">Delete</button>
          </div>
        </div>`;
  });
  formDiv.style.display = "none";
};

let updateProduct = (name) => {
  // console.log(name);
  formDiv.style.display = "flex";
  let product = productArr.find((elem) => elem.productName === name);
  updateIndex = productArr.findIndex((elem) => elem.productName === name);
  form[0].value = product.productName;
  form[1].value = product.description;
  form[2].value = product.price;
  form[3].value = product.image;
};

let deleteProduct = (index) => {
  productArr.splice(index, 1);
  ui();
};
