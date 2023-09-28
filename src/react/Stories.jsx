import React from "react";
import person1 from "../img/nat-8.jpg";
import person2 from "../img/nat-9.jpg";
import mp4Bg from "../img/video.mp4";
import webm4Bg from "../img/video.webm";
export default function Stories() {
  const storyData = [
    {
      userName: "Sh John",
      dp: person1,
      topic: "had a great time with family",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. A recusandae mollitia sapiente ratione quisquam, similique laboriosam, numquam incidunt error tenetur sequi reiciendis debitis eaque, odio consequuntur autem. Perspiciatis.",
    },
    {
      userName: "Dr. DkYad",
      dp: person2,
      topic: "Good experience with your deal",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. A recusandae mollitia sapiente ratione quisquam, similique laboriosam, numquam incidunt error tenetur sequi reiciendis debitis eaque, ",
    },
  ];

  const storyDataMap = storyData.map((e, i) => (
    <div key={i} className="row">
      <div className="story">
        <figure className="story__shape">
          <img src={e.dp} className="story__dp" alt="person" />
          <figcaption className="story__name">{e.userName}</figcaption>
        </figure>
        <h3 className="heading-tertiary u-marginB-s">{e.topic}</h3>
        <p>{e.description}</p>
      </div>
    </div>
  ));

  return (
    <div className="section-stories">
      <div className="bg-video">
        <video className="bg-video__content" autoPlay muted loop>
          <source src={mp4Bg} type="video/mp4" />
          <source src={webm4Bg} type="video/webm" />
          debugg the video data
        </video>
      </div>
      <div className=" u-center-text">
        <h2 className="heading-secondary u-marginB-8rem">
          Best Tours to choose
        </h2>
      </div>
      {storyDataMap}
      <div className="u-center-text u-marginT-6rem">
        <a href="#" className="btn-text">
          Read all Stories...
        </a>
      </div>
    </div>
  );
}
