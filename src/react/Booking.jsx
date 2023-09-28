import React from "react";
import bgnat10 from "../img/nat-10.jpg";
export default function Booking() {
  return (
    <div className="section-book">
      <div className="row">
        <div className="book">
          <div className="book__form">
            <h2 className="heading-secondary u-marginB-8rem u-marginT-4rem u-marginL">
              Book an Adventure Now
            </h2>
            <form className="form">
              <div className="form__group">
                <input
                  type="text"
                  placeholder="Full Name"
                  id="name"
                  className="form__input"
                  required
                />
                <label htmlFor="name" className="form__label">
                  Full name
                </label>
              </div>

              <div className="form__group">
                <input
                  type="email"
                  placeholder="Email Address"
                  id="email"
                  className="form__input"
                  required
                />
                <label htmlFor="email" className="form__label">
                  Email Address
                </label>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
