import React from "react";
import homeImg from "../img/hero.jpeg";
import logo from "../img/logo.png";
import logoBBC from "../img/logo-bbc.png";
import logoForbes from "../img/logo-forbes.png";
import logotech from "../img/logo-techcrunch.png";
import logobi from "../img/logo-bi.png";

export default function Header() {
  return (
    <>
      <header className="header">
        <img src={logo} alt="logo" className="header__logo" />
        <h3 className="heading-3">Your own home :</h3>
        <h1 className="heading-1">Discover your dream home</h1>
        <button className="btn">go through our Properties</button>
        <div className="header__seenon-text">go on</div>
        <div className="header__seenon-logos">
          <img src={logoBBC} alt="lo" />
          <img src={logoForbes} alt="lo" />
          <img src={logotech} alt="lo" />
          <img src={logobi} alt="lo" />
        </div>
      </header>
    </>
  );
}
