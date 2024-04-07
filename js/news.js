const left = document.getElementById("leftArrow");
const right = document.getElementById("rightArrow");

const dots = document.getElementById("dots");
const carasol = document.getElementById("carasolWrapper");

let offset = 0;

const newsModal = (title, headline, text, src) => {
  const style = `
    background-image:    url(${src});
    background-size:     cover;                      
    background-repeat:   no-repeat;
    background-position: center center;
  `;

  const pStyle = `
    white-space: pre-wrap;
  `;

  return `
    <div class="news">
      <div class="img" style="${style}" ></div>
      <div class="body">
        <h1>${title}</h1>
        <h2>${headline}</h2>
        <p style="${pStyle}">${text}</p>
      </div>
    </div>
  `;
};

const toggleArrows = () => {
  if (offset === 0) {
    left.classList.add("hide");
    right.classList.remove("hide");
  } else if (offset === dots.children.length - 1) {
    left.classList.remove("hide");
    right.classList.add("hide");
  } else {
    left.classList.remove("hide");
    right.classList.remove("hide");
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
  toggleArrows();
};

const handleLeftClick = (e) => {
  e.preventDefault();
  offsetCarasol(e, -1);
};

const handleRightClick = (e) => {
  e.preventDefault();
  offsetCarasol(e, 1);
};

left.addEventListener("click", handleLeftClick, false);
right.addEventListener("click", handleRightClick, false);
left.addEventListener("touchstart", handleLeftClick, false);
right.addEventListener("touchstart", handleRightClick, false);
