import React from "react";
import bgnat10 from "../img/nat-10.jpg";
export default function Booking() {
  const buttonDef = (e) => {
    e.preventDefault();
    console.log("form Submit button");
  };

  return (
    <div className="section-book">
      <div className="row">
        <div className="book">
          <div className="book__form">
            <h2 className="heading-secondary u-marginB-l u-marginT-4rem u-marginL">
              Book an Adventure Now
            </h2>
            <form className="form">
              {/* Name*/}
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
              {/* email*/}
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
              {/* radio -- small group*/}
              <div className="form__group">
                <div className="form__radio-group">
                  <input
                    type="radio"
                    className="form__radio-input"
                    id="small"
                    name="Group size"
                    hidden
                  />
                  <label htmlFor="small" className="form__radio-label">
                    <span className="form__radio-button" />
                    Small Tour Group
                  </label>
                </div>
                {/*radio -- Larger group*/}
                <div className="form__radio-group">
                  <input
                    type="radio"
                    className="form__radio-input"
                    id="large"
                    name="Group size"
                    hidden
                  />
                  <label htmlFor="large" className="form__radio-label">
                    <span className="form__radio-button" />
                    Large Group Tour
                  </label>
                </div>
              </div>
              <div className="form__group u-marginT-8rem">
                <button onClick={buttonDef} className="btn btn--green">
                  Next Step &rarr;
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
