import React from "react";
import nat5 from "../img/nat-5.jpg";
import nat6 from "../img/nat-6.jpg";
import nat7 from "../img/nat-7.jpg";

export default function Tours() {
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
          <div className="card__picture">
            <img src={e.image} alt="e" style={{ width: "100%" }} />
          </div>
          <div className="card__heading">{e.title}</div>
          <div className="card__details">
            {e.details.map((f) => (
              <ul>
                <li style={{ listStyleType: "none" }}>{f}</li>
              </ul>
            ))}
          </div>
        </div>
        <div
          className={`card__side card__side--back card__side--back-${i + 1}`}
        >
          <h2>ONLY</h2>
          {e.price}
          <button className="btn">Order Now</button>
        </div>
      </div>
    </div>
  ));
  return (
    <div className="tours">
      <div className="section-tours">
        <div className="u-center-text u-marginB-8rem">
          <h2 className="heading-secondary">Best Tours to choose</h2>
          <div className="row">{tourDataMap}</div>
        </div>
      </div>
    </div>
  );
}
