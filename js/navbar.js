const menuToggle = document.getElementById("menu-toggle");
const links = document.getElementById("links");
menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  links.classList.toggle("active");
});
