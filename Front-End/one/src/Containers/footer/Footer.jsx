import React from "react";
import "./footer.css";
import blog01 from "../../assets/logo.svg";

export default function Footer() {
  return (
    <div className="g__footer sectin-padding">
      <div className="g__footer-heading">
        <h1 className="gradient__text">
          Do you want to step in to the future before others
        </h1>
        <div className="g__footer-btn">
          <p>Request Early Access</p>
        </div>
      </div>
      <div className="g__footer-links">
        <div className="g__footer-links_logo">
          <img src={blog01} />
          <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>

        <div className="g__footer-links-list">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className="g__footer-links-list">
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className="g__footer-links-list">
          <h4>Get in touch</h4>
          <p>Crechterwoord K12 182 DK Alknjkcb</p>
          <p>085-132567</p>
          <p>info@payme.net</p>
        </div>
      </div>
      <div className="g__footer-copyright">
        © 2023 GPT-3. All rights reserved.
      </div>
    </div>
  );
}
