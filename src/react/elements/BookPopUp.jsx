import React from "react";
import person1 from "../../img/nat-8.jpg";
import person2 from "../../img/nat-9.jpg";
export default function BookPopUp() {
  return (
    <div className="popup">
      <div className="popup__content">
        <div className="row">
          <div className="col-1of2">
            <div className="popup__images">
              <img src={person1} alt="person1" />
              <img src={person2} alt="person1" />
            </div>
          </div>
          <div className="col-1of2">
            <div className="popup__content-text">
              <h1 className="heading-secondary u-marginT-4rem   u-marginB-6rem">
                Start Booking Now
              </h1>
              <h3 className="heading-tertiary u-marginB-m">
                Important - Please read the terms and Conditions
              </h3>
              <div className="row">
                <div className="col-1of2">
                  <p className="popup__paragraph">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nisi, debitis vel culpa magni eveniet delectus ut animi
                    fugit, amet autem eaque. Eveniet, reprehenderit iste
                    molestiae placeat id eos dolorum porro.
                  </p>
                </div>
                <div className="col1-1of2">
                  <p className="popup__paragraph">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nisi, debitis vel culpa magni eveniet delectus ut animi
                    fugit, amet autem eaque. Eveniet, reprehenderit iste
                    molestiae placeat id eos dolorum porro.
                  </p>
                </div>
              </div>
            </div>
            <button className="btn btn--green u-marginT-6rem">Book Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}
