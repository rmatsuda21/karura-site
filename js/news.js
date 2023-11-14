const left = document.getElementById("leftArrow");
const right = document.getElementById("rightArrow");

const dots = document.getElementById("dots");
const carasol = document.getElementById("carasolWrapper");

let offset = 0;
const populateDots = () => {
  for (let i = 0; i < carasol.children.length; i++) {
    const div = document.createElement("div");
    if (i === 0) div.classList.add("active");

    div.addEventListener("click", () => {
      offset = i;
      carasol.style.setProperty("--offset", offset);
      updateDots();
    });

    dots.appendChild(div);
  }
};

const updateDots = () => {
  for (let i = 0; i < dots.children.length; i++) {
    dots.children[i].classList.remove("active");
  }
  dots.children[offset].classList.add("active");
};

const clamp = (num, min, max) => Math.min(Math.max(num, min), max);
const offsetCarasol = (e, _offset) => {
  e.preventDefault();
  offset = clamp(offset + _offset, 0, dots.children.length - 1);
  carasol.style.setProperty("--offset", offset);
  updateDots();
};

left.addEventListener("click", (e) => offsetCarasol(e, -1), false);
right.addEventListener("click", (e) => offsetCarasol(e, 1), false);
left.addEventListener("touchstart", (e) => offsetCarasol(e, -1), false);
right.addEventListener("touchstart", (e) => offsetCarasol(e, 1), false);

populateDots();
