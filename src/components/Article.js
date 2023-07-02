import React from "react";
import { NavLink } from "react-router-dom";
import Aimg from "../assets/Images/iphone14.png";

const Blog = ({ article }) => {
  // console.log(article);
  return (
    <div>
      <NavLink to={article.link} target="_blank" className="article-container">
        <div className="card">
          <img src={Aimg} alt="" />
          <h3>{article.name}</h3>
          <div className="article-bar"></div>
          <div className="tags">
            {article.tags.map((tag) => {
              return <p>#{tag}&nbsp;</p>;
            })}
          </div>
          <p>{article.date}</p>
        </div>
      </NavLink>
    </div>
  );
};

export default Blog;
