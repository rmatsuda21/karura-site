const left = document.getElementById("leftArrow");
const right = document.getElementById("rightArrow");

const dots = document.getElementById("dots");
const carasol = document.getElementById("carasolWrapper");

let offset = 0;

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

const createCard = (title, headline, text, src) => {
  const root = document.createElement("div");
  root.classList.add("card");

  const imgWrapper = document.createElement("div");
  imgWrapper.classList.add("img-wrapper");
  const img = document.createElement("img");
  img.src = src;
  img.width = 150;
  imgWrapper.appendChild(img);

  const content = document.createElement("div");
  content.classList.add("content");
  const titleEl = document.createElement("p");
  titleEl.innerText = title;
  titleEl.classList.add("title");
  const headlineEl = document.createElement("p");
  headlineEl.innerText = headline;
  headlineEl.classList.add("headline");

  const readMore = document.createElement("a");
  readMore.innerText = "Read more";
  readMore.addEventListener("click", () =>
    showModal("<div><h1>Test!</h1></div>")
  );

  content.appendChild(titleEl);
  content.appendChild(headlineEl);
  content.appendChild(readMore);

  root.appendChild(imgWrapper);
  root.appendChild(content);

  return root;
};

const clearCards = () => {
  carasol.innerHTML = "";
};

const fetchNews = () => {
  const url =
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vRx8Ed3qaNCYACv-kJjjA7tG2e1wjOZuneSnUbhbS5_BPlGsWwwCOF-n7kBji6ez1syPInXtFNsSuKx/pub?gid=0&single=true&output=csv";

  fetch(url)
    .then((res) => res.text())
    .then((v) => {
      const rawRows = v.split("\n");
      const maxCount = parseInt(rawRows[0].split(",").slice(-1));

      if (rawRows.length < 1) return;

      const data = rawRows.slice(1).map((row) => row.split(","));
      clearCards();

      for (let i = 0; i < maxCount; i++) {
        row = data[i];
        carasol.appendChild(createCard(row[0], row[1], row[2], row[3]));
      }

      populateDots();
      right.classList.remove("hide");
    });
};

const populateDots = () => {
  for (let i = 0; i < carasol.children.length; i++) {
    const div = document.createElement("div");
    if (i === 0) div.classList.add("active");

    div.addEventListener("click", () => {
      offset = i;
      carasol.style.setProperty("--offset", offset);
      updateDots();
      toggleArrows();
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
  toggleArrows();
};

left.addEventListener("click", (e) => offsetCarasol(e, -1), false);
right.addEventListener("click", (e) => offsetCarasol(e, 1), false);
left.addEventListener("touchstart", (e) => offsetCarasol(e, -1), false);
right.addEventListener("touchstart", (e) => offsetCarasol(e, 1), false);

fetchNews();
