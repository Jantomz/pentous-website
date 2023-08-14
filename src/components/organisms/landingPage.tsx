export default function LandingPage() {
  return (
    <div className="body-special">
      <div className="flex-heading">
        <section id="landingImage">
          <div className="container-rohan"></div>
        </section>

        <section id="showcase">
          <img src="/pentous-logo.png" alt="Pentous Logo" className="logo" />

          <div className="container-rohan">
            <h1>Pentous</h1>
          </div>
        </section>
      </div>

      <section>
        <div className="jart">
          <h2>
            Meet our machine learning model: <br></br>[JART]
          </h2>
          <h3>
            <span>J</span>ourney to <span>A</span>ttainable <span>R</span>esults{" "}
            <span>T</span>ogether
          </h3>
          <p className="special-paragraph">
            Trained using tensorflow keras, JART is a state of the art machine
            learning buddy of ours. Using a total of 3 Conv2D layers and 2 Dense
            layers, this model was trained in very little time. With activation
            functions of relu and softmax, our categorical machine learning
            friend JART came about! Using a collected dataset of 3000+ images,
            categorized into the 4 food categories, JART is now able to figure
            out what food category you are showing it! This dataset was compiled
            by Pentous' creators! JART will let you know what food category you
            are most likely looking at!
          </p>
        </div>
      </section>

      <section className="intro-text">
        <div className="container-rohan">
          <h2>The Five Groups</h2>
        </div>
      </section>

      <div className="flex-bars">
        <div className="container-rohan">
          <div className="infobar">
            <h3>Fruits and Vegetables</h3>
            <p>
              Fruits, sometimes categorized with vegetables, include apples,
              oranges, bananas, berries and lemons. Fruits contain
              carbohydrates, mostly in the form of sugar as well as important
              vitamins and minerals. Cereals and legumes, sometimes categorized
              as grains, is often the largest category in nutrition guides.
              Cereal examples include wheat, rice, oats, barley, bread and
              pasta. Legumes are also known as pulses and include beans, soy
              beans, lentils and chickpeas. Cereals are a good source of starch
              and are often categorized with other starchy food such as
              potatoes. Legumes are good source of essential amino acids as well
              as carbohydrates. Fruits and vegetables are essential components
              in the diets of human beings, since they provide us with many
              essential nutrients.
            </p>
          </div>
        </div>

        <div className="container-rohan">
          <div className="infobar">
            <h3>Dairy</h3>
            <p>
              Dairy, also called milk products and sometimes categorized with
              milk alternatives or meat, is typically a smaller category in
              nutrition guides, if present at all, and is sometimes listed apart
              from other food groups. Examples of dairy products include milk,
              butter, ghee, yogurt, cheese, cream and ice cream. The
              categorization of dairy as a food group with recommended daily
              servings has been criticized by, for example, the Harvard School
              of Public Health who point out that `&quoi;`research has shown
              little benefit, and considerable potential for harm, of such high
              dairy intakes. Moderate consumption of milk or other dairy
              products—one to two servings a day—is fine, and likely has some
              benefits for children. But it is not essential for adults, for a
              host of reasons.`&quoi;`
            </p>
          </div>
        </div>

        <div className="container-rohan">
          <div className="infobar">
            <h3>Meat</h3>
            <p>
              Meat is animal flesh that is eaten as food. Humans have hunted,
              farmed, and scavenged animals for meat since prehistoric times.
              The establishment of settlements in the Neolithic Revolution
              allowed the domestication of animals such as chickens, sheep,
              rabbits, pigs, and cattle. This eventually led to their use in
              meat production on an industrial scale in slaughterhouses. Meat is
              mainly composed of water, protein, and fat. It is edible raw but
              is normally eaten after it has been cooked and seasoned or
              processed in a variety of ways. Unprocessed meat will spoil or rot
              within hours or days as a result of infection with, and
              decomposition by, bacteria and fungi. Meat is important to the
              food industry, economies, and cultures around the world. Protein
              is a primary
            </p>
          </div>
        </div>
      </div>

      <div className="flex-bars">
        <div className="container-rohan">
          <div className="infobar2">
            <h3>Grains</h3>
            <p>
              A grain is a small, hard, dry fruit (caryopsis) – with or without
              an attached hull layer – harvested for human or animal
              consumption. A grain crop is a grain-producing plant. The two main
              types of commercial grain crops are cereals and legumes. Some
              examples of grain products include breads, rice and oats.
            </p>
          </div>
        </div>

        <div className="container-rohan">
          <div className="infobar2">
            <h3>Water</h3>
            <p>
              Water is treated in very different ways by different food guides.
              Some exclude the category, others list it separately from other
              food groups, and yet others make it the center or foundation of
              the guide. Water is sometimes categorized with tea, fruit juice,
              vegetable juice and even soup, and is typically recommended in
              plentiful amounts.
            </p>
          </div>
        </div>
      </div>

      <div className="intro-text">
        <div className="container-rohan">
          <h2 id="aboutUs">About Us</h2>
        </div>
      </div>

      <section id="about-creators">
        <div className="container-rohan">
          <div className="descriptions">
            <h3>Avery Lor</h3>

            <p>
              As a heavily passioned student who loves programming I wanted to
              use my skills to aid those who surround me. Eating healthy and
              trying to live a healthy lifestyle is hard...I think that is
              something we can all agree upon. This inspired me and my friends
              to create Pentous to make once an incredibly hard journey easy.
              Together, using CSS, HTML for the front end design and javascript
              to create a machine learning program that would analyze each image
              our team created a tool that we believe will help many people.
            </p>
          </div>
        </div>

        <div className="container-rohan">
          <div className="descriptions">
            <h3>Jaden Zhang</h3>
            <p>
              Hi! I am a 16 year old student, studying computer science and all
              its amazing aspects! I enjoy learning front-end and am in the
              process of learning more. Making such a project really hurt my
              head, especially with my atrocious organization skills. I hope
              that I can make more organized projects in the future!
            </p>
          </div>
        </div>

        <div className="container-rohan">
          <div className="descriptions">
            <h3>Rohan Daves</h3>
            <p>
              I am 17 year old student who is interested in front-end
              development using languages such as HTML and CSS. I enjoy using my
              computer science skills to create projects with others. I applied
              my skills when creating Pentous, a project created in
              collaboration with friends in an effort to improve overall health
              of my fellow human beings.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
