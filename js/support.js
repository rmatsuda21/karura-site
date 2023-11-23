const supportBtn = document.querySelector("#supportBtn");

supportBtn.addEventListener("click", () => {
  showModal(
    `<div class="support">
      <img src="imgs/logo_black.png" alt="logo" />
      <h1>Thank you for<br /> visiting our website!</h1>
      <h2>We appreciate your continued support</h2>
      <div class="info">
        <span><strong>Branch Number</strong>426</span>
        <span><strong>Account Number</strong>3052264</span>
        <span><strong>Branch Name</strong>Nagano</span>
        <span><strong>Account Name</strong>KARURA</span>
        <span><strong>Type</strong>Saving Account</span>
      </div>
      <a href="https://gofund.me/99657e2a" class="special">Support us here</a>
    </div>`
  );
});
