import React from "react";
import "./article.css";
export default function Article({ imgURL, date, title }) {
  return (
    <div className="g__article">
      <div className="g__article-image">
        <img src={imgURL} />
      </div>
      <div className="g__article-content">
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        <p>Read full article</p>
      </div>
    </div>
  );
}
