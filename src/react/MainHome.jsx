import React from "react";
import photo1 from "../img/nat-1.jpg";
import photo2 from "../img/nat-2.jpg";
import photo3 from "../img/nat-3.jpg";

export default function MainHome() {
  return (
    <div id="book">
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
          <div className="col-1of2">
            <div className="composition">
              <img
                src={photo1}
                alt="photo-1"
                className="composition__photo composition__photo--p1"
              />
              <img
                src={photo2}
                alt="photo-2"
                className="composition__photo composition__photo--p2"
              />
              <img
                src={photo3}
                alt="photo-3"
                className="composition__photo composition__photo--p3"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
