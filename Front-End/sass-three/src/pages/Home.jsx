import React, { useState } from "react";

import house1 from "../img/house-1.jpeg";
import house2 from "../img/house-2.jpeg";
import house3 from "../img/house-3.jpeg";
import house4 from "../img/house-4.jpeg";
import house5 from "../img/house-5.jpeg";
import house6 from "../img/house-6.jpeg";

import { FcLikePlaceholder, FcLike } from "react-icons/fc";
import { ImLocation } from "react-icons/im";
import { BsPeople } from "react-icons/bs";
import { RxDimensions } from "react-icons/rx";
import { IoIosPricetag } from "react-icons/io";

export default function Home() {
  const [homeData, setHomeData] = useState([
    {
      id: 1,
      img: house1,
      type: "Beautiful family House",
      location: "USA",
      rooms: "5 rooms",
      area: "325",
      price: "1,10,000",
      like: false,
    },
    {
      id: 2,
      img: house2,
      type: "Morden Glass Villa",
      location: "Germany",
      rooms: "8 rooms",
      area: "482",
      price: "2,90,000",
      like: false,
    },
    {
      id: 3,
      img: house3,
      type: "Cozy Country House",
      location: "Switzerland",
      rooms: "6 rooms",
      area: "262",
      price: "920,000",
      like: false,
    },
    {
      id: 4,
      img: house4,
      type: "Forest View With Garden",
      location: "Italy",
      rooms: "12 rooms",
      area: "556",
      price: "4,55,900",
      like: false,
    },
    {
      id: 5,
      img: house5,
      type: "Royal Villa",
      location: "Spain",
      rooms: "22 rooms",
      area: "892",
      price: "6,99,000",
      like: false,
    },
    {
      id: 6,
      img: house6,
      type: "Morden Smart House",
      location: "France",
      rooms: "18 rooms",
      area: "289",
      price: "3,45,990",
      like: true,
    },
  ]);
  /*
    setLike(prevData => {
             return prevData.map(item=> {
                 return item.id === id ? {...item, on:!item.on} : item
             })
  }*/

  const toggleLike = (e) => {
    console.log(e.id);
    setHomeData((prevState) =>
      prevState.map((item) => {
        if (item.id === e.id) {
          return {
            ...item,
            like: !item.like,
          };
        }
        return item;
      })
    );
  };
  const homeDataMap = homeData.map((e) => (
    <div className="home" key={e.id}>
      <img src={e.img} alt="" className="home__image" />
      <div className="home__like" onClick={() => toggleLike(e)}>
        {e.like ? <FcLike /> : <FcLikePlaceholder />}
      </div>
      <div className="home__name">{e.type}</div>

      <div className="home__location">
        <ImLocation />
        {e.location}
      </div>
      <div className="home__rooms">
        <BsPeople />
        {e.rooms}
      </div>
      <div className="home__area">
        <RxDimensions />
        {e.area}
      </div>
      <div className="home__price">
        <IoIosPricetag />${e.price}
      </div>
      <button className="home__btn btn">Contact realtor</button>
    </div>
  ));

  return (
    <>
      <section className="homes">{homeDataMap}</section>
    </>
  );
}
