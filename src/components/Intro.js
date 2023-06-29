import React from "react";
import { motion } from "framer-motion";
import Me from "../assets/Images/profile-img.png";

const Intro = () => {
  return (
    <motion.div
      className="container-intro"
      initial={{ height: 0 }}
      animate={{ height: "55vh" }}
      transition={{ type: "spring", duration: 2, delay: 1 }}
    >
      <div className="container-presentation">
        <div className="content">
          <h1>Hi,</h1>
          <h3>I'm Maxime</h3>
          <h6>I design and code simple yet beautifull websites</h6>
        </div>
      </div>
      <motion.div
        className="container-presentation"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <img className="pic" src={Me} alt="profil img" />
      </motion.div>
    </motion.div>
  );
};

export default Intro;
