import React, { useState, useEffect } from "react";
import nat5 from "../img/nat-5.jpg";
import nat6 from "../img/nat-6.jpg";
import nat7 from "../img/nat-7.jpg";
import BookPopUp from "./elements/BookPopUp";

export default function Tours() {
  const [isPopUp, setIsPopUp] = useState(false);

  const popUpBookButton = (e) => {
    e.preventDefault();
    setIsPopUp((prev) => !prev);
    console.log("popup - " + isPopUp);
  };
  //escape to close the pop UP
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "Escape") {
        setIsPopUp(false);
        console.log(" Escase");
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  const tourData = [
    {
      title: "The Sea Explorer",
      image: nat5,
      details: [
        "20 day's tour",
        "unlimited people",
        "8 tour guides",
        "sleep at campfire",
        "Difficulty : easy",
      ],
      price: "$250",
    },
    {
      title: "The Forest Hicker",
      image: nat6,
      details: [
        "15 day's tour",
        "20 people",
        "6 tour guides",
        "sleep in provided Tents",
        "Difficulty : Medium",
      ],
      price: "$380",
    },
    {
      title: "The Snow Adventurer",
      image: nat7,
      details: [
        "5 day tour",
        "8 people",
        "2 tour guides",
        "sleep in provided Tents",
        "Difficulty : Hard",
      ],
      price: "$880",
    },
  ];
  const tourDataMap = tourData.map((e, i) => (
    <div key={i} className="col-1of3">
      <div className="card">
        <div className="card__side card__side--front">
          <div className={`card__picture card__picture--${i + 1}`}></div>
          <h4 className="card__heading">
            <span
              className={`card__heading-span card__heading-span--${i + 1} `}
            >
              {e.title}
            </span>
          </h4>
          <div className="card__details">
            {e.details.map((f) => (
              <ul>
                <li>{f}</li>
              </ul>
            ))}
          </div>
        </div>
        <div
          className={`card__side card__side--back card__side--back-${i + 1}`}
        >
          <div className=" card__cta">
            <div className="card__price-box">
              <p className="card__price-only">ONLY</p>
              <p className="card__price-value">{e.price}</p>
            </div>
          </div>
          <a
            onClick={popUpBookButton}
            href="#"
            className="card__price-btn btn btn--white"
          >
            Book Now
          </a>
        </div>
      </div>
    </div>
  ));
  return (
    <div className="section-tours">
      <div className="section-popup">
        <div className={`section-popup__content--${isPopUp}`}>
          {isPopUp && <BookPopUp isPopUp={isPopUp} setIsPopUp={setIsPopUp} />}
        </div>
      </div>

      <div className="section-tours u-center-text">
        <h2 className="heading-secondary u-marginB-8rem ">
          Best Tours to choose
        </h2>
        <div className="row">{tourDataMap}</div>
        <div className="u-marginB-8rem">
          <a href="#" className="btn btn--green">
            Discover all Tours
          </a>
        </div>
      </div>
    </div>
  );
}
