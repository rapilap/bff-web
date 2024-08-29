// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");
const shopCart = document.querySelector(".shopping-cart");

// Hamburger Menu Start
document.querySelector("#ham-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Outside Click
const ham = document.querySelector("#ham-menu");

document.addEventListener("click", function (e) {
  if (!ham.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
// Hamburger Menu End

// Search Start
document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

// Outside Click
const unSearch = document.querySelector("#search-button");
document.addEventListener("click", function (e) {
  if (!unSearch.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
});
// Search End

// Shopping Cart Start
document.querySelector("#shopping-cart").onclick = () => {
  shopCart.classList.toggle("active");
};

// Outside Click
const cart = document.querySelector("#shopping-cart");

document.addEventListener("click", function (e) {
  if (!cart.contains(e.target) && !shopCart.contains(e.target)) {
    shopCart.classList.remove("active");
  }
});
// Hamburger Menu End

// Modal Box Start
const itemDetailModel = document.querySelector("#item-detail-modal");
const itemDetailButton = document.querySelectorAll(".item-detail-button");

itemDetailButton.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModel.style.display = " flex";
    e.preventDefault();
  };
});

document.querySelector(".modal .close-container").onclick = (e) => {
  itemDetailModel.style.display = "none";
  e.preventDefault();
};

window.onclick = (e) => {
  if (e.target === itemDetailModel) {
    itemDetailModel.style.display = "none";
  }
};
