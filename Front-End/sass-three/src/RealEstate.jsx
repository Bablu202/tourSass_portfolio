import React from "react";
import Features from "./pages/Features";
import Story from "./pages/Story";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Footer from "./pages/Footer";
import Header from "./pages/Header";

export default function RealEstate() {
  return (
    <body className="container">
      {/*HEADER*/}
      <Header />
      {/*FEATURES*/}
      <Features />
      {/*STORY - IMG */}
      {/*SIDE DATA*/}
      <Story />
      {/*HOME*/}
      <Home />
      {/*GALLERY*/}
      <Gallery />
      {/*FOOTER*/}
      <Footer />
    </body>
  );
}