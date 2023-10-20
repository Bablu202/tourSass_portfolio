import React from "react";
import realtor1 from "../img/realtor-1.jpeg";
import realtor2 from "../img/realtor-2.jpeg";
import realtor3 from "../img/realtor-3.jpeg";
export default function Realtors() {
  const realtorsData = [
    { name: "Eru Jam Yo", dp: realtor1, souldCount: 356 },
    { name: "David Ria", dp: realtor2, souldCount: 552 },
    { name: "Josup Pulla", dp: realtor3, souldCount: 266 },
  ];

  const realtorsDataMap = realtorsData.map((e) => (
    <div className="realtors__list">
      <img src={e.dp} alt="1" className="realtors__img" />
      <div className="realtors__details">
        <h4 className="heading-4 heading-4--light">{e.name}</h4>
        <p className="realtors__sold">{e.souldCount}&nbsp;houses sold.</p>
      </div>
    </div>
  ));
  return (
    <div className="realtors">
      <h3 className="heading-2 heading-2--dark">Out top Realtors</h3>
      {realtorsDataMap}
    </div>
  );
}
