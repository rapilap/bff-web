// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

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
