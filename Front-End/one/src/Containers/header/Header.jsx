import React from "react";
import "./header.css";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";
export default function Header() {
  return (
    <div className="g__header section__padding" id="home">
      <div className="g__header-content">
        <h1 className="gradient__text">Here we build Something with open AI</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
        <div className="g__header-content__input">
          <input type="email" placeholder="Enter Your E-mail address" />
          <button type="button">Get Started</button>
        </div>
        <div className="g__header-content__people">
          <img src={people} alt="people" />
          <p>1,2500 requested access to visit in 24 hours</p>
        </div>
      </div>
      <div className="g__header-image">
        <img src={ai} alt="ai" />
      </div>
    </div>
  );
}
