const business = document.querySelector("#business");
const science = document.querySelector("#science");
const engineering = document.querySelector("#engineering");

const businessModal = `
  <div class="business">
    <h1>Business</h1>
  </div>
`;

business.addEventListener("click", () => {
  showModal(businessModal);
});
