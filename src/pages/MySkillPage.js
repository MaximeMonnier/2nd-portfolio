import React from "react";
import PowerButton from "../components/PowerButton";
import SocialCons from "../components/SocialCons";
import LogoComponent from "../components/LogoComponent";
import ParticlesComponent from "../components/ParticlesComponent";

const MysSkillPage = () => {
  return (
    <div>
      <div className="container-skills">
        <SocialCons />
        <PowerButton />
        <LogoComponent />
        <ParticlesComponent />
        <div className="box-skills">
          <div className="main-skills">
            <div className="title-skills">
              <h1>
                <svg
                  height={40}
                  width={40}
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="palette"
                  className="svg-inline--fa fa-palette fa-w-16"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M204.3 5C104.9 24.4 24.8 104.3 5.2 203.4c-37 187 131.7 326.4 258.8 306.7 41.2-6.4 61.4-54.6 42.5-91.7-23.1-45.4 9.9-98.4 60.9-98.4h79.7c35.8 0 64.8-29.6 64.9-65.3C511.5 97.1 368.1-26.9 204.3 5zM96 320c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm32-128c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128-64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"
                  ></path>
                </svg>
                &nbsp;Designer
              </h1>
            </div>
            <div className="description">
              I love to create design which speaks, keep it clean, minimal and
              simple.
            </div>
            <div className="description">
              <strong>I like to Design</strong>
              <ul>
                <li>Web design</li>
                <li>Mobile Apps</li>
              </ul>
            </div>
            <div className="description">
              <strong>Tools</strong>
              <ul>
                <li>Figma</li>
                <li>Adobe XD</li>
              </ul>
            </div>
          </div>

          <div className="main-skills">
            <div className="title-skills">
              <h1>
                <svg
                  height={40}
                  width={40}
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="laptop-code"
                  className="svg-inline--fa fa-laptop-code fa-w-20"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 512"
                >
                  <path
                    fill="currentColor"
                    d="M255.03 261.65c6.25 6.25 16.38 6.25 22.63 0l11.31-11.31c6.25-6.25 6.25-16.38 0-22.63L253.25 192l35.71-35.72c6.25-6.25 6.25-16.38 0-22.63l-11.31-11.31c-6.25-6.25-16.38-6.25-22.63 0l-58.34 58.34c-6.25 6.25-6.25 16.38 0 22.63l58.35 58.34zm96.01-11.3l11.31 11.31c6.25 6.25 16.38 6.25 22.63 0l58.34-58.34c6.25-6.25 6.25-16.38 0-22.63l-58.34-58.34c-6.25-6.25-16.38-6.25-22.63 0l-11.31 11.31c-6.25 6.25-6.25 16.38 0 22.63L386.75 192l-35.71 35.72c-6.25 6.25-6.25 16.38 0 22.63zM624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z"
                  ></path>
                </svg>
                &nbsp;Front-end Développeur
              </h1>
            </div>
            <div className="description">
              <p>
                A value buisness or brand for wich i'm creating, this i enjoy
                bringing new ideas to life.
              </p>
            </div>
            <div className="description">
              <strong>Skills</strong>
              <p>
                Html, Css, Js, React, Redux, Sass, Bootstrap, Tailwind, Firebase
                etc.
              </p>
            </div>
            <div className="description">
              <strong>Tools</strong>
              <p>VScode, Github, Codepen etc.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MysSkillPage;
