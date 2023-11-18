const business = document.querySelector("#business");
const science = document.querySelector("#science");
const engineering = document.querySelector("#engineering");

const businessModal = `
  <div class="business">
    <h1>Business</h1>
    <p>
      The Business Department of Project Karura, headed by Victor Y. 
      and Masato, is the direct communication system between Project Karura 
      and the companies/networks that allow the project to succeed. With direct 
      ties to the Texas A&M Foundation, Mays Business School, and many other supporters/companies, 
      the Business Department aims to build and sustain connections with the industry supporting 
      and surrounding the project.
    </p>
    <p>
      The Business department also works closely with the public, allowing our 
      project to be well known in the surrounding communities, along with online ones. 
      Business members are constantly establishing new connections with space exploration 
      networks and members of the public curious about our groundbreaking project.
    </p>

    <img src="imgs/departments/business.png" />
  </div>
`;

const engineeringModal = `
  <div class="engineering">
    <h1>Engineering</h1>

    <p>
      The Engineering team of Project Karura, led by Texas A&M Aerospace Engineering student 
      Ben Davis, works to design and build our Mars rover, from scratch, to be able to assist 
      astronauts in their tasks and analyze data for improvement in the space exploration field. 
      Project Karura&apos;s Engineering team features the minds of some of each nation&apos;s top 
      University engineers, including the #7 ranked Texas A&M Engineering School, with over 15 
      active engineers ranging from Computer Science, Aerospace Engineering, Mechanical Engineering, etc. 
    </p>
    <p>
      On the Japanese side, Project Karura&apos;s engineering department has designed an ingenious 
      method that allows the recruitment of high school students to learn and participate in a 
      one-of-a-kind student-led rover project. The Japanese team features engineers from the 
      University of Tokyo, Shinshu University, Waseda University, etc.
    </p>  

    <img src="imgs/departments/engineering.png" />
  </div>
`;

const scienceModal = `
  <div class="science">
    <h1>Science</h1>

    <p>
      Project Karura&apos;s Science Department, led by JP leader Taiko Hirai, works as a 
      multinational collaborative team that seeks to incorporate scientific mechanisms and 
      methods into the physical rover. These scientific attachments seek to identify and 
      differentiate soil life. With constant experimentation of different biolife chemicals, 
      the Science department has made large strides in getting through as many different types 
      of soils, and the markers of life associated with each one.
    </p>

    <img src="imgs/departments/science.png" />
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
