addEventListener("load", () => {
  const modal = document.getElementById("modal");
  modal.addEventListener("click", hideModal);
});

const hideModal = (e) => {
  console.log(e.target);
  if (e.target.id !== "modal") return;

  const modal = document.getElementById("modal");
  modal.classList.add("hidden");
};

const showModal = (html) => {
  const modal = document.getElementById("modal");
  modal.innerHTML = html;
  modal.classList.remove("hidden");
};
