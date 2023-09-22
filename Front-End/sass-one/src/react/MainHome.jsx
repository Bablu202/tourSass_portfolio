import React from "react";

export default function MainHome() {
  return (
    <div>
      <section className="section-about">
        <div className="u-center-text u-marginB-8rem">
          <h2 className="heading-secondary">
            Exiciting tours for adventurous people
          </h2>
        </div>
        <div className="row">
          <div className="col-1of2">
            <h3 className="heading-tertiary u-marginB-s">
              there is more in Nature to explore
            </h3>
            <p className="paragraph">
              Ipsum dolor sit amet consectetur, adipisicing elit. Omnis
              excepturi animi aut molestias dolorem consectetur cupiditate
              quidem cum illum blanditiis, est dicta. Fuga, cupiditate corrupti
              minima hic culpa architecto reprehenderit.
            </p>
            <h3 className="heading-tertiary">
              lets do this again for a better adventures
            </h3>
            <p className="paragraph">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptatem veniam ut et iusto distinctio mollitia, numquam ipsum
              est totam voluptatum.
            </p>
            <a href="#home-learn" className="btn-text" id="home-learn">
              Learn more &rarr;
            </a>
          </div>
          <div className="col-1of2">Image Content</div>
        </div>
      </section>
    </div>
  );
}
