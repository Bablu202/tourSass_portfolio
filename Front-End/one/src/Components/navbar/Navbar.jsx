import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo.svg";
import "./navbar.css";
const Menu = () => (
  <>
    <p>
      <a href="#home">Home</a>
    </p>
    <p>
      <a href="#wgpt3">What is GPT</a>
    </p>
    <p>
      <a href="#possibility">Open AI</a>
    </p>
    <p>
      <a href="#features">Case Study</a>
    </p>
    <p>
      <a href="#blog">Library</a>
    </p>
  </>
);
export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="g__navbar">
      <div className="g__navbar-links">
        <div className="g__navbar-links_logo">
          <img src={logo} atl="logo" />
        </div>
        <div className="g__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="g__navbar-sign">
        <p>SignIn</p>
        <button type="button">SignUp</button>
      </div>
      <div className="g__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="g__navbar-menu_container scale-up-center">
            <div className="g__navbar-menu_container-links">
              <Menu />
              <div className="g__navbar-menu_container-links-sign">
                <p>SignIn</p>
                <button type="button">SignUp</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
