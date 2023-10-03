import React from "react";
import logoGreen from "../img/logo-green-2x.png";
export default function Footer() {
  const aTagDefault = (e) => {
    e.preventDefault();
  };

  const footerTags = [
    "Company",
    "ContactUs",
    "Carrers",
    "Privacy Policy",
    "Terms",
  ];
  const footerTagsMap = footerTags.map((e, i) => (
    <li key={i} className="footer__item">
      <a href="#" onClick={aTagDefault} className="footer__link">
        {e}
      </a>
    </li>
  ));
  return (
    <div className="section-footer">
      <div className="footer__logo-box">
        <img src={logoGreen} alt="logo" className="footer__logo" />
      </div>
      <div className="row">
        <div className="col-1of2">
          <div className="footer__navigation">
            <ul className="footer__list">{footerTagsMap}</ul>
          </div>
        </div>
        <div className="col-1of2">
          <p className="footer__copyright">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            aliquid dolor velit vitae facilis voluptatibus explicabo quod
            corporis maxime veniam doloribus, laudantium quia. Consectetur ex
            harum vero necessitatibus explicabo ad. to know more
            <br />I created this webPage following a tutorial from{" "}
            <a
              href="https://www.udemy.com/"
              target="_blank"
              className="footer__link"
            >
              UDEMY
            </a>
            <br />
            To know or to contact me -{" "}
            <a
              href="https://bablu.vercel.app/"
              target="_blank"
              className="footer__link"
            >
              my Personal Page
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
