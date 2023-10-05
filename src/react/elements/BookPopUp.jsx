import React from "react";
import person1 from "../../img/nat-8.jpg";
import person2 from "../../img/nat-9.jpg";
export default function BookPopUp({ isPopUp, setIsPopUp }) {
  const popUp = (e) => {
    e.preventDefault();
    setIsPopUp(false);

    console.log("close on right top");
  };

  console.log("always" + isPopUp);
  return (
    <div className="popup">
      <div className="popup__content">
        <div className={`popup__${isPopUp}`}>
          <div className="popup__left">
            <img src={person1} alt="person1" className="popup__img" />
            <img src={person2} alt="person1" className="popup__img" />
          </div>
          <div className="popup__right">
            <a href="" onClick={popUp} className="popup__close">
              &times;
            </a>
            <h1 className="heading-secondary u-marginB-s">Start Booking Now</h1>
            <h3 className="heading-tertiary u-marginB-s">
              Important - Please read the terms and Conditions
            </h3>
            <p className="popup__text">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy. Contrary to popular
              belief, Lorem Ipsum is not simply random text. It has roots in a
              piece of classical Latin literature from 45 BC, making it over
              2000 years old. Richard McClintock, a Latin professor at
              Hampden-Sydney College in Virginia, looked up one of the more
              obscure Latin words, consectetur, from a Lorem Ipsum passage, and
              going through the cites of the word in classical literature,
              discovered the undoubtable source. Lorem Ipsum comes from sections
              1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum"
            </p>
            <button className="btn btn--green u-marginT-6rem">Book Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}
