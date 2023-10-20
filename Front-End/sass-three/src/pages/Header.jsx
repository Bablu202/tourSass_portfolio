import React from "react";
import homeImg from "../img/hero.jpeg";
import logo from "../img/logo.png";
import logoBBC from "../img/logo-bbc.png";
import logoForbes from "../img/logo-forbes.png";
import logotech from "../img/logo-techcrunch.png";
import logobi from "../img/logo-bi.png";
import Realtors from "../components/Realtors";

export default function Header() {
  return (
    <>
      {/*Side Bar*/}
      <div className="sidebar">
        <button className="nav-btn"></button>
      </div>
      <header className="header">
        <img src={logo} alt="logo" className="header__logo" />
        <div>
          <h3 className="heading-2-hero">Your own home :</h3>
          <h1 className="heading-1">Discover your dream home</h1>
        </div>

        <button className="header__btn btn">go through our Properties</button>
        <div className="header__seenon-text">go on</div>
        <div className="header__seenon-logos">
          <img src={logoBBC} alt="lo" />
          <img src={logoForbes} alt="lo" />
          <img src={logotech} alt="lo" />
          <img src={logobi} alt="lo" />
        </div>
      </header>
      {/*Realtors*/}
      <Realtors />{" "}
    </>
  );
}
