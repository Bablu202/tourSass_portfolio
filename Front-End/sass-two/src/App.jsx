import React from "react";
import { BsArrowBarRight as ArrowRightIcon } from "react-icons/bs";
import { GiAirplaneDeparture as FlightsIcon } from "react-icons/gi";
import { PiChatsThin as ChatIcon, PiKeyLight as KeyIcon } from "react-icons/pi";
import {
  CiHome as HotelIcon,
  CiLocationOn as LocationIcon,
  CiSearch as SearchIcon,
  CiMap as MapIcon,
  CiBookmark as BookMarkIcon,
} from "react-icons/ci";
import { AiFillStar as StarIcon, AiFillCar as CarIcon } from "react-icons/ai";

import logo from "./img/logo.png";
import userdp from "./img/user.jpg";

import gallery1 from "./img/hotel-1.jpg";
import gallery2 from "./img/hotel-2.jpg";
import gallery3 from "./img/hotel-3.jpg";

import user1 from "./img/user-1.jpg";
import user2 from "./img/user-2.jpg";
import user3 from "./img/user-3.jpg";
import user4 from "./img/user-4.jpg";
import user5 from "./img/user-5.jpg";
import user6 from "./img/user-6.jpg";

export default function App() {
  //gallery images
  const gallery = [gallery1, gallery2, gallery3];
  const galleryImages = gallery.map((e) => (
    <figure className="gallery__item">
      <img src={e} alt="e" className="gallery__photo" />
    </figure>
  ));

  const includes = [
    "Close to beach",
    "free - strong - wifi",
    "Complimentary breakfast",
    "Free Airport Shuttle",
    "pets are allowed",
    "perfect for Families",
    "AC and Warm optimizations",
  ];
  const hotelIncludes = includes.map((e) => (
    <li className="detail__user-list-item">
      <span className="detail__user-list-icon">
        <ArrowRightIcon />
      </span>
      {e}
    </li>
  ));
  const reccommendFriends = [user1, user2, user3, user4, user5, user6];
  const listReccommendFriends = reccommendFriends.map((e) => (
    <img src={e} alt="user" className="detail__recommend-friends-img" />
  ));

  return (
    <div className="container">
      {/*Header and search bar*/}
      <div className="header">
        <img src={logo} alt="logo" className="logo" />
        <form action="" className="search">
          <input
            type="text"
            className="search__input"
            placeholder="search ..."
          />
          <button className="search__button">
            <SearchIcon className="search__icon" />
          </button>
        </form>
        <div className="user-nav">
          <div className="user-nav__icon-box">
            <BookMarkIcon className="user-nav__icon" />
            <p className="user-nav__notification">7</p>
          </div>
          <div className="user-nav__icon-box">
            <ChatIcon className="user-nav__icon" />
            <p className="user-nav__notification">5</p>
          </div>
          <div className="user-nav__user">
            <img src={userdp} alt="" className="user-nav__user-photo" />
            <span className="user-nav__user-name">Flex Tol</span>
          </div>
        </div>
      </div>
      {/*content*/}

      <div className="content">
        {/*Navigation side bar*/}

        <div className="sidebar">
          <ul className="side-nav">
            <li className="side-nav__item side-nav__item--active">
              <a href="#" className="side-nav__link">
                <div className="side-nav__icon">
                  <HotelIcon />
                  <span>Home</span>
                </div>
              </a>
            </li>
            <li className="side-nav__item">
              <a href="#" className="side-nav__link">
                <div className="side-nav__icon">
                  <FlightsIcon />
                  <span>Flights</span>
                </div>
              </a>
            </li>
            <li className="side-nav__item">
              <a href="#" className="side-nav__link">
                <div className="side-nav__icon">
                  <CarIcon />
                  <span>Rent a Car</span>
                </div>
              </a>
            </li>
            <li className="side-nav__item">
              <a href="#" className="side-nav__link">
                <div className="side-nav__icon">
                  <MapIcon />
                  <span>Tours</span>
                </div>
              </a>
            </li>
          </ul>
          <div className="legal">&copy; All rights reserved.</div>
        </div>
        {/*content and more information*/}

        <div className="hotel-view">
          <div className="gallery">{galleryImages}</div>
          <div className="overview">
            <h1 className="overview__heading">Lolo Vala Tulip</h1>
            <div className="overview__stars">
              <div className="overview__icon-star">
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
              </div>
            </div>
            <div className="overview__location">
              <div className="overview__icon-location">
                <LocationIcon />
              </div>
              <button className="btn-inline overview__location-text">
                Heidelberg, Germany
              </button>
            </div>
            <div className="overview__rating">
              <div className="overview__rating-average">7.2</div>
              <div className="overview__rating-count">220 Votes</div>
            </div>
          </div>
          <div className="detail">
            <div className="detail__description">
              <p className="detail__paragraph">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
                nisi dignissimos debitis ratione sapiente saepe. Accusantium
                cumque, quas, ut corporis incidunt deserunt quae architecto
                voluptate.
              </p>
              <p className="detail__paragraph">
                Accusantium cumque, quas, ut corporis incidunt deserunt quae
                architecto voluptate delectus, inventore iure aliquid aliquam.
              </p>
              <ul className="detail__user-list">{hotelIncludes}</ul>
              <div className="detail__recommend-friends">
                <p className="detail__recommend-count">
                  Roy and 5 other friends reccommend this Hotel
                </p>

                {listReccommendFriends}
              </div>
            </div>

            <div className="detail__user-reviews">
              <p className="detail__user-reviwes__text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
                doloremque architecto dicta animi, totam, itaque officia ex.
              </p>
              <p className="detail__user-reviews__text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
                doloremque architecto dicta animi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
