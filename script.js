function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function smoothScroll(target) {
  const element = document.querySelector(target);
  if (element) {
    window.scrollTo({
      top: element.offsetTop - 180,
      behavior: "smooth",
    });
  }
}

const navLinks = document.querySelectorAll(".nav-links a, .menu-links a");
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const target = link.getAttribute("href");
    smoothScroll(target);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Form submitted!");
  });
});
