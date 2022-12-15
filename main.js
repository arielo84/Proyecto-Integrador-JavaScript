// Guardamos en variables los elementos que traemos del DOM.
const products = document.querySelector(".our-products-container");
const productsCart = document.querySelector(".cart-container");
const categories = document.querySelector(".categories");
const categoriesList = document.querySelectorAll(".category");
const btnLoad = document.querySelector(".btn-load");
const buyBtn = document.querySelector(".btn-buy");
const deleteBtn = document.querySelector(".btn-delete");
const total = document.querySelector(".total");
const cartMenu = document.querySelector(".cart");
const cartBtn = document.querySelector(".cart-label");
const barsBtn = document.querySelector(".menu-label");
const barsMenu = document.querySelector(".navbar-list");
const overlay = document.querySelector(".overlay");
const successModal = document.querySelector(".add-modal");

// Variable que trae productos o un array vacío del carrito desde el Local Storage.
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Se setean los products en el Local Storage.
const saveLocalStorage = (cartList) => {
  localStorage.setItem("cart", JSON.stringify(cartList));
};

// Función para renderizar los productos.
const renderProduct = (product) => {
  const { id, name, category, year, description, cardImg, logoImg, price } =
    product;
  return `
  <div class="our-products-card">
      <div class="our-products-poster-img">
        <img src="${cardImg}" alt="${name}" />
      </div>
      <div class="our-products-logo-img">
        <img src="${logoImg}" alt="${name}" />
      </div>
      <div class="our-products-card-info">
        <p>${year}</p>
        <p>${description}</p>
      </div>
      <div class="our-products-card-pricing">
        <span>$${price}</span>
        <button
        type="button"
        class="btn-add"
        data-id="${id}"
        data-name="${name}"
        data-price="${price}"
        data-img="${cardImg}">Agregar
        </button>
      </div>
   </div>
  `;
};

// Se selecciona cada producto y se mapea.
const renderDividedProducts = (index = 0) => {
  products.innerHTML += productsController.dividedProducts[index]
    .map(renderProduct)
    .join("");
};

//Función que filtra los productos por categoría.
const renderFilteredProducts = (category) => {
  const productsList = productsData.filter(
    (product) => product.category === category
  );
  products.innerHTML = productsList.map(renderProduct).join("");
};

// Se chequea si tiene categoría para rendedizar los primeros 6 productos.
const renderProducts = (index = 0, category = undefined) => {
  if (!category) {
    renderDividedProducts(index);
    return;
  }
  renderFilteredProducts(category);
};

// Lógica de filtros

// Función que evalúa los estados relacionados a los filtros.
const changeFilterState = (e) => {
  const selectedCategory = e.target.dataset.category;
  changeBtnActiveState(selectedCategory);
  changeShowMoreBtnState(selectedCategory);
};

// La categoría seleccionada cambiará a activa cuando se cliquee en el lugar correspondiente.
const changeBtnActiveState = (selectedCategory) => {
  const categories = [...categoriesList];
  categories.forEach((categoryBtn) => {
    if (categoryBtn.dataset.category !== selectedCategory) {
      categoryBtn.classList.remove("active");
      return;
    }
    categoryBtn.classList.add("active");
  });
};

// Función que chequea si se muestra el "botón de ver más" al selección una categoría.
const changeShowMoreBtnState = (category) => {
  if (!category) {
    btnLoad.classList.remove("hidden");
    return;
  }
  btnLoad.classList.add("hidden");
};

// Función que verifica si existe una categoría para cambiarl el estado de la misma y sino se renderizan los productos. [Esta función es la que creo me está dando problemas]
const applyFilter = (e) => {
  if (!e.target.classList.contains("category")) return;
  changeFilterState(e);
  if (!e.target.dataset.category) {
    products.innerHTML = "";
    renderProducts();
  } else {
    renderProducts(0, e.target.dataset.category);
    productsController.nextProductsIndex = 1;
  }
};

// Función que verifica si se está al final de la lista de productos.
const isLastIndexOf = () =>
  productsController.nextProductsIndex === productsController.productsLimit;

// Función que verifica si hay más productos para mostrar. Caso contrario, el botón "ver más" desaparecerá.
const showMoreProducts = () => {
  renderProducts(productsController.nextProductsIndex);
  productsController.nextProductsIndex++;
  if (isLastIndexOf()) {
    btnLoad.classList.add("hidden");
  }
};

// Función que hace aparecer el "menú hamburguesa".
const toggleMenu = () => {
  barsMenu.classList.toggle("open-menu");
  if (cartMenu.classList.contains("open-cart")) {
    cartMenu.classList.remove("open-cart");
    return;
  }
  overlay.classList.toggle("show-overlay");
};

// Función que hace aparecer el "carrito".
const toggleCart = () => {
  cartMenu.classList.toggle("open-cart");
  if (barsMenu.classList.contains("open-menu")) {
    barsMenu.classList.remove("open-menu");
    return;
  }
  overlay.classList.toggle("show-overlay");
};

// Función que redirige al clickear en un link del navbar cieera el menú y quita el "overlay".
const closeOnClick = (e) => {
  if (!e.target.classList.contains("navbar-link")) return;
  barsMenu.classList.remove("open-menu");
  overlay.classList.remove("show-overlay");
};

// Función que hace desaparecer el menú y el "carrito" al scrollear por la página web.
const closeOnScroll = (e) => {
  if (
    !barsMenu.classList.contains("open-menu") &&
    !cartMenu.classList.contains("open-cart")
  )
    return;
  barsMenu.classList.remove("open-menu");
  cartMenu.classList.remove("open-cart");
  overlay.classList.remove("show-overlay");
};

// Función que hace desaparecer el "overlay" al clickearlo.
const closeOnOverlayClick = () => {
  barsMenu.classList.remove("open-menu");
  cartMenu.classList.remove("open-cart");
  overlay.classList.remove("show-overlay");
};

// Lógica de agregado de productos al carrito.
const renderCartProduct = (cartProduct) => {
  const { id, name, price, img, quantity } = cartProduct;
  return `
      <div class="cart-item">
        <img src=${img} alt="Producto del carrito" />
        <div class="item-info">
          <h3 class="item-title">${name}</h3>
          <span class="item-price">$${price}</span>
        </div>
        <div class="item-handler">
          <span class="quantity-handler down" data-id=${id}>-</span>
          <span class="item-quantity">${quantity}</span>
          <span class="quantity-handler up" data-id=${id}>+</span>
        </div>
      </div>`;
};

const renderCart = () => {
  // Si el carrito está vacío nos muestra un mensaje.
  if (!cart.length) {
    productsCart.innerHTML = `<p class="empty-msg">No agregaste ningún producto al carrito.</p>`;
    return;
  }
  // Caso contrario, se renderizan los productos que se agregaron.
  productsCart.innerHTML = cart.map(renderCartProduct).join("");
};

const getCartTotal = () => {
  return cart.reduce(
    (acc, cur) => acc + Number(cur.price) * Number(cur.quantity),
    0
  );
};

const showTotal = () => {
  total.innerHTML = `${new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(getCartTotal())}`;
};

// Función para deshabilitar los botones de "comprar" y "vaciar" el carrito.
const disableBtn = (btn) => {
  if (!cart.length) {
    btn.classList.add("disabled");
    return;
  }
  btn.classList.remove("disabled");
};

// Función para añadir una unidad de producto al "carrito".
const addUnitToProduct = (product) => {
  cart = cart.map((cartProduct) => {
    return cartProduct.id === product.id
      ? { ...cartProduct, quantity: cartProduct.quantity + 1 }
      : cartProduct;
  });
};

const createCartProduct = (product) => {
  cart = [...cart, { ...product, quantity: 1 }];
};

// Se chequea si el producto se encuentra en el "carrito".
const isExistingCartProduct = (product) => {
  return cart.find((item) => item.id === product.id);
};

const createProductData = (id, name, price, img) => {
  return { id, name, price, img };
};

// Función que chequea el estado del "carrito" agrupando otras funciones dentro.
const checkCartState = () => {
  saveLocalStorage(cart);
  renderCart(cart);
  showTotal(cart);
  disableBtn(buyBtn);
  disableBtn(deleteBtn);
};

// Mensaje modal que aparece cada vez que se agregar un producto al "carrito".
const showSuccessModal = (msg) => {
  successModal.classList.add("active-modal");
  successModal.textContent = msg;
  setTimeout(() => {
    successModal.classList.remove("active-modal");
  }, 1500);
};

// Función para manejar el añadido de productos.
const addProduct = (e) => {
  if (!e.target.classList.contains("btn-add")) return;
  const { id, name, price, img } = e.target.dataset;
  const product = createProductData(id, name, price, img);

  // Si el producto ya se encuentra en el "carrito", se añade.
  if (isExistingCartProduct(product)) {
    addUnitToProduct(product);
    showSuccessModal("Agregaste una unidad de producto al carrito");
  } else {
    //Si el producto no existe en el "carrito", se crea.
    createCartProduct(product);
    showSuccessModal("Agregaste un producto al carrito");
  }
  checkCartState();
};

// Función para remover un producto del "carrito".
const removeProductFromCart = (existingProduct) => {
  cart = cart.filter((product) => product.id !== existingProduct.id);
  checkCartState();
};

// Función para restar una unidad de producto del "carrito".
const substractProductUnit = (existingProduct) => {
  cart = cart.map((cartProduct) => {
    return cartProduct.id === existingProduct.id
      ? { ...cartProduct, quantity: cartProduct.quantity - 1 }
      : cartProduct;
  });
};

const handleMinusBtnEvent = (id) => {
  const existingCartProduct = cart.find((item) => item.id === id);

  if (existingCartProduct.quantity === 1) {
    if (window.confirm("¿Querés eliminar el producto del carrito?")) {
      removeProductFromCart(existingCartProduct);
    }
    return;
  }
  substractProductUnit(existingCartProduct);
};

const handlePlusBtnEvent = (id) => {
  const existingCartProduct = cart.find((item) => item.id === id);
  addUnitToProduct(existingCartProduct);
};

// Función para manipular los botones de sumar y restar del "carrito."
const handleQuantity = (e) => {
  if (e.target.classList.contains("down")) {
    handleMinusBtnEvent(e.target.dataset.id);
  } else if (e.target.classList.contains("up")) {
    handlePlusBtnEvent(e.target.dataset.id);
  }
  checkCartState();
};

const resetCartItems = () => {
  cart = [];
  checkCartState();
};

const completeCartAction = (confirmMsg, successMsg) => {
  if (!cart.length) return;
  if (window.confirm(confirmMsg)) {
    resetCartItems();
    alert(successMsg);
  }
};

const completePurchase = () => {
  completeCartAction(
    "¿Querés realizar la compra?",
    "La compra se ha realizado correctamente"
  );
};

const deleteCart = () => {
  completeCartAction(
    "¿Estás seguro que querés vaciar el carrito?",
    "No hay productos en el carrito"
  );
};

const init = () => {
  renderProducts();
  categories.addEventListener("click", applyFilter);
  btnLoad.addEventListener("click", showMoreProducts);
  barsBtn.addEventListener("click", toggleMenu);
  cartBtn.addEventListener("click", toggleCart);
  barsMenu.addEventListener("click", closeOnClick);
  window.addEventListener("scroll", closeOnScroll);
  overlay.addEventListener("click", closeOnOverlayClick);
  document.addEventListener("DOMContentLoaded", renderCart);
  document.addEventListener("DOMContentLoaded", showTotal);
  products.addEventListener("click", addProduct);
  productsCart.addEventListener("click", handleQuantity);
  buyBtn.addEventListener("click", completePurchase);
  deleteBtn.addEventListener("click", deleteCart);
  disableBtn(buyBtn);
  disableBtn(deleteBtn);
};

init();
