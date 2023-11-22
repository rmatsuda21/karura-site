const menuToggle = document.getElementById("menu-toggle");
const links = document.getElementById("links");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  links.classList.toggle("active");
});

links.querySelectorAll("li").forEach((link) => {
  link.addEventListener("click", () => {
    menuToggle.classList.remove("active");
    links.classList.remove("active");
  });
});
