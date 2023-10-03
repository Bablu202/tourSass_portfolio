import React from "react";
import { IoIosGlobe } from "react-icons/io";
import { VscCompass } from "react-icons/vsc";
import { GiPathDistance } from "react-icons/gi";
import { PiMaskHappyLight } from "react-icons/pi";
export default function Features() {
  const data = [
    {
      rIcon: IoIosGlobe,
      title: "Explore the World",
      paragraph:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
    },
    {
      rIcon: VscCompass,
      title: "Meet the Nature",
      paragraph:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.",
    },
    {
      rIcon: GiPathDistance,
      title: "Find your Way",
      paragraph:
        'very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section',
    },
    {
      rIcon: PiMaskHappyLight,
      title: "A Healthier Life",
      paragraph:
        "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections",
    },
  ];
  const dataMap = data.map((e) => (
    <div className="col-1of4">
      <div className="feature-box">
        <e.rIcon className="feature-box__icon" />
        <div className="heading-tertiary">{e.title}</div>
        <p className="feature-box__text">{e.paragraph}</p>
      </div>
    </div>
  ));

  return (
    <div className="features">
      <div className="section-features">
        <div className="row">{dataMap}</div>
      </div>
    </div>
  );
}
