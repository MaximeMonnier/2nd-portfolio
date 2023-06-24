import React, { useState } from "react";
import PowerButton from "../components/PowerButton";
import LogoComponent from "../components/LogoComponent";
import SocialCons from "../components/SocialCons";
import { NavLink } from "react-router-dom";

const Main = () => {
  const [ClickYing, setClickYing] = useState(false);

  const handelClick = () => {
    setClickYing(!ClickYing);
  };

  return (
    <div className="lighttheme">
      <div className="container-main">
        <PowerButton />
        <LogoComponent />
        <SocialCons />

        <div className="center">
          <div>
            <svg
              onClick={handelClick}
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="yin-yang"
              className="svg-inline--fa fa-yin-yang fa-w-16 yingyang"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 496 512"
            >
              <path
                fill="currentColor"
                d="M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm0 376c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm0-128c-53.02 0-96 42.98-96 96s42.98 96 96 96c-106.04 0-192-85.96-192-192S141.96 64 248 64c53.02 0 96 42.98 96 96s-42.98 96-96 96zm0-128c-17.67 0-32 14.33-32 32s14.33 32 32 32 32-14.33 32-32-14.33-32-32-32z"
              ></path>
            </svg>
          </div>
          <span>Click Here</span>
        </div>

        <NavLink to="/contact">
          <h2 className="contact">Say hi...</h2>
        </NavLink>
        <NavLink to="/blog">
          <h2 className="blog">Blog</h2>
        </NavLink>
        <NavLink to="/work">
          <h2 className="work">Work</h2>
        </NavLink>
        <div className="bottom-bar">
          <NavLink to="/about">
            <h2 className="about">About</h2>
          </NavLink>
          <NavLink to="/skills">
            <h2 className="skills">Skills</h2>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Main;
