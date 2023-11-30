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
    showModal(newsModal(title, headline, text, src))
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

const fetchNews = (url) => {
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
