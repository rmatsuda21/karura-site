const supportBtn = document.querySelector("#supportBtn");

supportBtn.addEventListener("click", () => {
  showModal(
    `<div class="support">
      <img src="/imgs/logo_black.png" alt="logo" />
      <h1>Thank you for<br /> visiting our website!</h1>
      <h2>皆様からのご支援お待ちしております</h2>
      <div class="info">
        <span><strong>支店番号</strong>426</span>
        <span><strong>口座番号</strong>3052264</span>
        <span><strong>支店名</strong>長野支店</span>
        <span><strong>口座名義</strong>KARURA</span>
        <span><strong>科目</strong>普通</span>
      </div>
      <a href="https://camp-fire.jp/projects/view/753892" class="special">支援はこちらから</a>
    </div>`
  );
});
