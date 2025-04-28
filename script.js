const container = document.querySelector(".container");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const sidebar = document.querySelector(".sidebar");
const menuLines = document.querySelectorAll(".line");

hamburgerMenu.addEventListener("click", (e) => {
  sidebar.classList.toggle("change");
  menuLines.forEach((line) => {
    line.classList.toggle("change");
  });
});
