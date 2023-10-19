import React from "react";
import img1 from "../img/story-1.jpeg";
import img2 from "../img/story-2.jpeg";
export default function Story() {
  return (
    <>
      <div className="story__pictures">
        <img src={img1} alt="storyImg1" className="story__img--1" />
        <img src={img2} alt="storyImg2" className="story__img--2" />
      </div>
      <div className="story__content ">
        <h3 className="heading-3 mb-2">Happy Customers</h3>
        <h2 className="heading-2 heading-2--dark mb-3">
          &ldquo;The best decision of our lives&rdquo;
        </h2>
        <p className="story__text mb-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          distinctio necessitatibus pariatur voluptatibus. Quidem consequatur
          harum volupta!
        </p>
        <button className="btn btn--story">Find your own Home</button>
      </div>
    </>
  );
}
