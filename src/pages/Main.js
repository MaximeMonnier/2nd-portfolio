import React, { useState } from "react";
import { motion } from "framer-motion";
import PowerButton from "../components/PowerButton";
import LogoComponent from "../components/LogoComponent";
import SocialCons from "../components/SocialCons";
import { NavLink } from "react-router-dom";
import Intro from "../components/Intro";
import ParticlesAbsorber from "../components/ParticlesAbsorber";

const Main = () => {
  const [ClickYing, setClickYing] = useState(false);

  const handelClick = () => {
    setClickYing(!ClickYing);
  };

  return (
    <div className="lighttheme">
      <div className="container-main">
        <div className={ClickYing ? "darktheme" : "darkthemeNone"}>
          <PowerButton />
          <LogoComponent clickying={ClickYing} />
          <SocialCons clickying={ClickYing} />
          <ParticlesAbsorber />
        </div>

        <div className={ClickYing ? "centerActive" : "center"}>
          <div>
            <svg
              onClick={handelClick}
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="yin-yang"
              className={
                ClickYing
                  ? "svg-inline--fa fa-yin-yang fa-w-16 yingyangActive"
                  : "svg-inline--fa fa-yin-yang fa-w-16 yingyang"
              }
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
          <span className={ClickYing ? "textyingActive" : "textying"}>
            Click Here
          </span>
        </div>

        <NavLink to="/contact">
          <motion.h2
            className="contact"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Say hi...
          </motion.h2>
        </NavLink>
        <NavLink to="/blog">
          <motion.h2
            className="blog"
            initial={{ rotate: "90deg" }}
            animate={{ rotate: "90deg" }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            ro
          >
            Blog
          </motion.h2>
        </NavLink>
        <NavLink to="/work">
          <motion.h2
            className={ClickYing ? "workActive" : "work"}
            initial={{ rotate: "-90deg" }}
            animate={{ rotate: "-90deg" }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Work
          </motion.h2>
        </NavLink>
        <div className="bottom-bar">
          <NavLink to="/about">
            <motion.h2
              className={ClickYing ? "aboutActive" : "about"}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              About
            </motion.h2>
          </NavLink>
          <NavLink to="/skills">
            <motion.h2
              className="skills"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Skills
            </motion.h2>
          </NavLink>
        </div>
      </div>
      {ClickYing ? <Intro /> : null}
    </div>
  );
};

export default Main;
