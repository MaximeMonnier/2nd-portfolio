import React from "react";

const LogoComponent = ({ clickying }) => {
  return (
    <div className={clickying ? "logoActive" : "logo"}>
      <h1>M&M</h1>
    </div>
  );
};

export default LogoComponent;
