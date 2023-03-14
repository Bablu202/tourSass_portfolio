import React from "react";
import "./app.css";
//Components
import Article from "./Components/article/Article";
import Brand from "./Components/brand/Brand";
import CTA from "./Components/cta/CTA";
import Feature from "./Components/feature/Feature";
import Navbar from "./Components/navbar/Navbar";
import BlogData from "./Containers/blogData/BlogData";
//Containers
import Footer from "./Containers/footer/Footer";
import Header from "./Containers/header/Header";
import Features from "./Containers/features/Features";
import Possibility from "./Containers/possibility/Possibility";
import WhatGPT3 from "./Containers/whatGPT3/WhatGPT3";

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <BlogData />
      <Footer />
    </div>
  );
}

export default App;
