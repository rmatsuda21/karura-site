const menuToggle = document.getElementById("menu-toggle");
const links = document.getElementById("links");
menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  links.classList.toggle("active");
});

const url =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vRx8Ed3qaNCYACv-kJjjA7tG2e1wjOZuneSnUbhbS5_BPlGsWwwCOF-n7kBji6ez1syPInXtFNsSuKx/pub?gid=0&single=true&output=csv";

fetch(url)
  .then((res) => res.text())
  .then((v) => console.log(v.split("\n")[1]));
