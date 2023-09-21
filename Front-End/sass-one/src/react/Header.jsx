import React from "react";
import logoWhite from "../img/logo-white.png";

export default function Header() {
  const Discover = (e) => {
    e.preventDefault();
    console.log("discover button");
  };
  return (
    <div className="header">
      <div className="header__logo-box">
        <img src={logoWhite} alt="logoW" className="header__logo" />
        Logo
      </div>
      <div className="header__text-box">
        <h1 className="heading-primary">
          <span className="heading-primary--main">climb-Up</span>
          <span className="heading-primary--sub">is where life Happnes</span>
        </h1>
        <a href="" className="btn btn--white btn--anim" onClick={Discover}>
          discover our tours
        </a>
      </div>
    </div>
  );
}
