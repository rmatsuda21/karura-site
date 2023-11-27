const business = document.querySelector("#business");
const science = document.querySelector("#science");
const engineering = document.querySelector("#engineering");

const businessModal = `
  <div class="business">
    <h1>Business</h1>
    <p>
      KARURAのビジネス部門は、アメリカ支部リーダー<br/>
      ビクター・ユウと日本支部リーダーのまさと（漢字）<br/>
      を中心に、開発に協力してくださる企業/ネットワーク<br/>
      と密接なコミュニケーションを行います。
    </p>
    <p>
      テキサスA&M財団、メイズ・ビジネススクールなどプロジェクトを
      支援してくれる業界とのつながりを構築し、維持し続けることを目指しています。
    </p>
    <p>
      より多くの人々に私たちの活動を興味をもってもらえるよう、
      常に新しいつながり/ネットワークを築くことに尽力しています
    </p>

    <img src="/imgs/departments/business.png" />
  </div>
`;

const engineeringModal = `
  <div class="engineering">
    <h1>Engineering</h1>

    <p>
      テキサスA&M航空宇宙工学の学生であるベン・デイビスがリーダーを
      務めるKARURAのエンジニアリングチームは、宇宙探査分野での作業の
      支援やデータ分析に使用されるマーズ・ローバー（火星探査機）
      をゼロから設計・構築する   作業を行っています。 
    </p>
    <p>
      KARURAのエンジニアリングチームには
      各国のトップ大学のエンジニアが集まっています。
      全米ランキング7位のテキサスA&M工学校からは、
      コンピュータサイエンス、航空宇宙工学、機械工学など
      さまざまな分野のエンジニアが15名以上参加しています。
    </p>
    <p>
      日本支部のエンジニアリング部門では、主に東京大学、
      信州大学、早稲田大学などからエンジニアが
      参加しています。また、高校生のうちから
      学生主導のプロジェクトに参加し、学ぶことができる
      唯一無二の仕組みを確立しています。
    </p>

    <img src="/imgs/departments/engineering.png" />
  </div>
`;

const scienceModal = `
  <div class="science">
    <h1>Science</h1>

    <p>
      KARURAのサイエンス部門はリーダーである平井 大源を<br/>
      中心に構成された多国籍なチームであり、科学的な面から<br/>
      ローバー（火星探査機）のメカニズムや部品の構築に携わっています。 
    </p>
    <p>
      作成された部品は、火星の土壌に潜む生命を識別する
      機能を持っています。さまざまな生命化学物質を使った実験を継続的に行い、
      サイエンス部門はそれぞれの土壌に残る生命の痕跡を辿る技術を磨き続けています。
    </p>  

    <img src="/imgs/departments/science.png" />
  </div>
`;

business.addEventListener("click", () => {
  showModal(businessModal);
});

engineering.addEventListener("click", () => {
  showModal(engineeringModal);
});

science.addEventListener("click", () => {
  showModal(scienceModal);
});
