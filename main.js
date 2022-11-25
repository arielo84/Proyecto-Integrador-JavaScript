const products = document.querySelector(".our-products-container");
const productsCart = document.querySelector(".cart-container");
const total = document.querySelector(".total");
const genres = document.querySelector(".genres-card-container");
const genresList = document.querySelectorAll(".category");
const btnLoad = document.querySelector(".btn-load");
const buyBtn = document.querySelector(".btn-buy");
const cartBtn = document.querySelector(".cart-label");
const barsBtn = document.querySelector(".menu-label");
const cartMenu = document.querySelector(".cart");
const barsMenu = document.querySelector(".navbar-list");
const overlay = document.querySelector(".overlay");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

const saveLocalStorage = (cartList) => {
  localStorage.setItem("cart", JSON.stringify(cartList));
};

const renderProduct = (product) => {
  const { id, name, description, CardImg, LogoImg, price } = product;
  return `<div class="our-products-card">
            <div class="our-products-poster-img">
              <img src="${CardImg}" alt="${name}" />
            </div>
            <div class="our-products-logo-img">
              <img src="${LogoImg}" alt="${name}" />
            </div>
            <div class="our-products-card-info">
              <p>${description}</p>
            </div>
            <div class="our-products-card-pricing">
              <span>$${price}</span>
              <button
                type="button"
                class="addBtn"
                data-id="${id}"
                data-name="${name}"
                data-bid="${price}"
                data-img="${CardImg}">
                Agregar
              </button>
            </div>
          </div>
        `;
};

const renderDividedProducts = (index = 0) => {
  products.innerHTML += productsController.dividedProducts[index]
    .map(renderProduct)
    .join("");
};

const renderFilteredProducts = (category) => {
  const productsList = productsData.filter(
    (product) => product.category === category
  );
  products.innerHTML = productsList.map(renderProduct).join("");
};

const renderProducts = (index = 0, category = undefined) => {
  if (!category) {
    renderDividedProducts(index);
    return;
  }
  renderFilteredProducts(category);
};

const changeFilterState = (e) => {
  const selectedCategory = e.target.dataset.category;
  changeBtnActiveState(selectedCategory);
  changeShowMoreBtnState(selectedCategory);
};

const changeBtnActiveState = (selectedCategory) => {
  const genres = [...genresList];
  genres.forEach((categoryBtn) => {
    if (categoryBtn.dataset.category !== selectedCategory) {
      categoryBtn.classList.remove("genres-card-active");
      return;
    }
    categoryBtn.classList.add("genres-card-active");
  });
};

const changeShowMoreBtnState = (category) => {
  if (!category) {
    btnLoad.classList.remove("hidden");
    return;
  }
  btnLoad.classList.add("hidden");
};

const applyFilter = (e) => {
  if (!e.target.classList.contains("category")) return;
  changeFilterState(e);
  if (!e.target.dataset.category) {
    products.innerHTML = "";
    renderProducts();
  } else {
    renderProducts(0, e.target.dataset.category);
  }
};

const isLastIndexOf = () =>
  productsController.nextProductsIndex === productsController.productsLimit;

const showMoreProducts = () => {
  renderProducts(productsController.nextProductsIndex);
  productsController.nextProductsIndex++;
  if (isLastIndexOf()) {
    btnLoad.classList.add("hidden");
  }
};

const init = () => {
  renderProducts();
  genres.addEventListener("click", applyFilter);
  btnLoad.addEventListener("click", showMoreProducts);
};

init();
