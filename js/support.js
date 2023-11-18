const supportBtn = document.querySelector("#supportBtn");

supportBtn.addEventListener("click", () => {
  showModal(
    `<div class="support">
      <h1>Support</h1>
      <p>Send us an email at <a>something@gmail.com</a></p>
      <div class="footer">
        
      </div>
    </div>`
  );
});
