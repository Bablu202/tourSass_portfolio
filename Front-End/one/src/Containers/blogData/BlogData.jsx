import React from "react";
import Article from "../../Components/article/Article";
import blog01 from "../../assets/blog01.png";
import blog02 from "../../assets/blog02.png";
import blog03 from "../../assets/blog03.png";
import blog04 from "../../assets/blog04.png";
import blog05 from "../../assets/blog05.png";

import "./blogData.css";
export default function BlogData() {
  return (
    <div className="g__blog section-padding">
      <div className="g__blog-heading">
        <h1 className="gradient__text">
          A lot is happening, We are blogging about it.
        </h1>
      </div>
      <div className="g__blog-container">
        <div className="g__blog-container_groupA">
          <Article
            imgURL={blog01}
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
        </div>
        <div className="g__blog-container_groupB">
          <Article
            imgURL={blog02}
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
          <Article
            imgURL={blog03}
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
          <Article
            imgURL={blog04}
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
          <Article imgURL={blog05} text="" />
        </div>
      </div>
    </div>
  );
}
