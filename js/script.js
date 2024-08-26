// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");

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
