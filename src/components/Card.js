import React from "react";
import { NavLink } from "react-router-dom";

const Card = ({ data }) => {
  console.log(data);
  return (
    <div className="card">
      <div className="title-card">
        <h2>{data.name}</h2>
      </div>
      <div className="decription-card">
        <h2>{data.description}</h2>
      </div>
      <div className="tags-container">
        {data.tags.map((t, id) => {
          return <div key={id}>#{t}&nbsp;</div>;
        })}
      </div>
      <div className="footer-card">
        <NavLink to={data.demo} target="blank">
          <p>Demo</p>
        </NavLink>
        <NavLink to={data.github} target="blank">
          <p>Git</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Card;
