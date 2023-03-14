import React from "react";
import "./feature.css";
export default function Feature({ title, text }) {
  return (
    <div className="gpt__features-container__feature">
      <div className="gpt__features-container__feature-title">
        <h1>{title}</h1>
      </div>
      <div className="gpt__features-container__feature-text">
        <p>{text}</p>
      </div>
    </div>
  );
}
