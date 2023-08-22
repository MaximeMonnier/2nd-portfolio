import React from "react";
import PowerButton from "../components/PowerButton";
import SocialConsD from "../components/SocialConsD";
import LogoComponentD from "../components/LogoComponentD";
import ParticlesAmong from "../components/ParticlesAmong";
import SpaceMan from "../assets/Images/spaceman.png";

const AboutPage = () => {
  return (
    <div>
      <div className="container-about">
        <SocialConsD />
        <PowerButton />
        <LogoComponentD />
        <ParticlesAmong />
        <div className="about">
          <p>ABOUT</p>
        </div>
        <div className="box-about">
          <div className="about-presentation">
            <div className="description">
              <p>
                I'm a front-end developer located in France. I love to create
                simple yet beautiful websites with great user experience.
              </p>
              <br />
              <p>
                I'm interested in the whole frontend stack Like trying new
                things and building great projects.
              </p>
              <br />
              <p>
                I'm an independent freelancer and blogger. I love to write blogs
                and read books. I believe everything is an Art when you put your
                consciousness in it. You can connect with me via social links.
              </p>
            </div>
          </div>
          <div className="spaceman">
            <img src={SpaceMan} alt="spaceman" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
