import React from "react";

export default function NavElement() {
  const navData = [
    "About Climb-Up",
    "Your benifits",
    "Popular tours",
    "Stories",
    "Book now",
  ];

  const navDataMap = navData.map((e, i) => (
    <li key={i} className="navigation__item">
      <a href="" className="navigation__link">
        {"0" + (i + 1) + ". " + e}
      </a>
    </li>
  ));

  return (
    <div className="navigation">
      <input
        type="checkbox"
        className="navigation__checkbox"
        id="navi-toggle"
      />
      <label htmlFor="navi-toggle" className="navigation__button">
        <span className="navigation__icon">&nbsp;</span>
      </label>

      <div className="navigation__background">&nbsp;</div>
      <nav className="navigation__nav">
        <ul className="navigation__list">{navDataMap}</ul>
      </nav>
    </div>
  );
}
