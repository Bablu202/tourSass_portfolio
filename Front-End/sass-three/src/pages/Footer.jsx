import React from "react";

export default function Footer() {
  const footerElements = [
    "Find your dream Home",
    "Request proposal",
    "Custom Interior Design",
    "Contact Architect",
    "Sale Your Property",
    "Join US!",
  ];

  const footerElementsMap = footerElements.map((e) => (
    <li className="nav__item">
      <a href="" className="nav__link">
        {e}
      </a>
    </li>
  ));

  return (
    <>
      <footer className="footer">
        <nav className="nav__items">{footerElementsMap}</nav>
        <div className="copy">
          <p className="copy_text">
            &copy; This webpage is created by following tutorial from &nbsp;
            <a
              href="https://www.udemy.com/"
              target="_blank"
              className="copy__link"
            >
              UDEMY
            </a>
          </p>
          <p className="copy_text">
            This is my Personal Page &nbsp;
            <a
              href="https://www.bablu.verce.app/"
              target="_blank"
              className="copy__link"
            >
              Bablu
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}
