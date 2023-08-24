import React, { useEffect, useRef, useState } from "react";
import PowerButton from "../components/PowerButton";
import SocialConsD from "../components/SocialConsD";
import LogoComponentD from "../components/LogoComponentD";
import { Work } from "../data/WorkData";
import Card from "../components/Card";

const WorkPage = () => {
  const ref = useRef(null);

  useEffect(() => {
    let element = ref.current;

    window.addEventListener("scroll", (e) => {
      const scrollY = window.scrollY; // Obtient la valeur du défilement vertical
      const scrollX = window.scrollX; // Obtient la valeur du défilement horizontal

      console.log("Scroll Y:", scrollY);
      console.log("Scroll X:", scrollX);
    });

    const rotate = () => {
      element.style.transform = `translateX(${-window.scrollY}px)`;
    };

    window.addEventListener("scroll", rotate);

    return () => window.removeEventListener("scroll", rotate);
  }, []);

  return (
    <div>
      <div className="container-work" ref={ref}>
        <SocialConsD />
        <PowerButton />
        <LogoComponentD />
        <div className="work-back">
          <p>WORK</p>
        </div>
        <ul className="container-card">
          {Work.map((d) => {
            return <Card key={d.id} data={d} />;
          })}
        </ul>
      </div>
    </div>
  );
};

export default WorkPage;
