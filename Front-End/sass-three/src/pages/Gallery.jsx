import React from "react";
import p1 from "../img/gal-1.jpeg";
import p2 from "../img/gal-2.jpeg";
import p3 from "../img/gal-3.jpeg";
import p4 from "../img/gal-4.jpeg";
import p5 from "../img/gal-5.jpeg";
import p6 from "../img/gal-6.jpeg";
import p7 from "../img/gal-7.jpeg";
import p8 from "../img/gal-8.jpeg";
import p9 from "../img/gal-9.jpeg";
import p10 from "../img/gal-10.jpeg";
import p11 from "../img/gal-11.jpeg";
import p12 from "../img/gal-12.jpeg";
import p13 from "../img/gal-13.jpeg";
import p14 from "../img/gal-14.jpeg";

export default function Gallery() {
  const images = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14];

  const imagesMap = images.map((e, i) => (
    <figure className={`gallery__item gallery__item--${i + 1}`}>
      <img src={e} alt="1" className="gallery__img" />
    </figure>
  ));

  return (
    <>
      <section className="gallery">{imagesMap}</section>
    </>
  );
}
