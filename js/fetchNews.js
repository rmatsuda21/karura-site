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
      console.log(v);
      const rawRows = v.split("\r").map((row) => row.trim());
      // console.log(JSON.parse(v));
      console.log(rawRows);
      const maxCount = parseInt(rawRows[0].split(",").slice(-1));

      if (rawRows.length < 1) return;

      const result = [];

      for (const row of rawRows.slice(1)) {
        let columns = [];
        let current = "";
        let withinQuotes = false;

        for (let char of row) {
          if (char === "," && !withinQuotes) {
            columns.push(current.trim());
            current = "";
          } else if (char === '"') {
            withinQuotes = !withinQuotes;
          } else {
            current += char;
          }
        }

        columns.push(current.trim());
        result.push(columns);
      }
      console.log(result);
      clearCards();

      for (let i = 0; i < maxCount; i++) {
        row = result[i];
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
