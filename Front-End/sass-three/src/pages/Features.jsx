import React from "react";

import { PiGlobeThin as globeIcon } from "react-icons/pi";
import { BsAward as awardIcon, BsGraphUp as graphIcon } from "react-icons/bs";
import { VscLocation as locationIcon } from "react-icons/vsc";
import { PiKeyThin as keyIcon } from "react-icons/pi";
import { AiOutlineSafetyCertificate as safeIcon } from "react-icons/ai";

export default function Features() {
  const featuresData = [
    {
      feature: "World's best luxury homes",
      icon: globeIcon,
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio necessitatibus pariatur voluptatibus.",
    },
    {
      feature: "Only the best Properties",
      icon: awardIcon,
      text: "Voluptatum mollitia quae. Vero ipsum sapiente molestias accusamus rerum sed a eligendi aut quia.",
    },
    {
      feature: "All homes in top locations",
      icon: locationIcon,
      text: "Tenetur distinctio necessitatibus pariatur voluptatibus quidem consequatur harum.",
    },
    {
      feature: "New Home in one Week",
      icon: keyIcon,
      text: "Vero ipsum sapiente molestias accusamus rerum. Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      feature: "Top 1% realtors",
      icon: graphIcon,
      text: "Quidem consequatur harum, voluptatum mollitia quae. Tenetur distinctio necessitatibus pariatur voluptatibus.",
    },
    {
      feature: "Secure Payments and Investemetns",
      icon: safeIcon,
      text: "Pariatur voluptatibus quidem consequatur harum, voluptatum mollitia quae.",
    },
  ];
  const featureMapData = featuresData.map((e) => (
    <div className="feature">
      <div className="feature__icon">{<e.icon />}</div>
      <h4 className="heading-4 heading-4--dark">{e.feature}</h4>
      <p className="feature__text">{e.text}</p>
    </div>
  ));
  return <section className="features">{featureMapData}</section>;
}
