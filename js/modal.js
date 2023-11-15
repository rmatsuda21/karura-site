window.onload = () => {
  const modal = document.getElementById("modal");
  modal.addEventListener("click", hideModal);
};

const hideModal = () => {
  const modal = document.getElementById("modal");
  modal.classList.add("hidden");
};

const showModal = (html) => {
  const modal = document.getElementById("modal");
  modal.innerHTML = html;
  modal.classList.remove("hidden");
};
