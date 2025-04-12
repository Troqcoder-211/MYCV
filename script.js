let menuIcon = document.getElementById("menu-icon");
let navbar = document.querySelector(".navbar");
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");
window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        let element = document.querySelector("header nav a[href*=" + id + "]");
        element.classList.add("active");
      });
    }
  });
};
menuIcon.onclick = function () {
  menuIcon.classList.toggle("fa-x");
  navbar.classList.toggle("active");
};
