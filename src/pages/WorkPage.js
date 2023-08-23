import React from "react";
import PowerButton from "../components/PowerButton";
import SocialConsD from "../components/SocialConsD";
import LogoComponentD from "../components/LogoComponentD";
import { Work } from "../data/WorkData";
import Card from "../components/Card";

const AboutPage = () => {
  return (
    <div>
      <div className="container-work">
        <SocialConsD />
        <PowerButton />
        <LogoComponentD />
        <div className="container-card">
          {Work.map((d) => {
            return <Card key={d.id} data={d} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
