import React from "react";

const LogoComponent = ({ clickying }) => {
  return (
    <div className={clickying ? "logo" : "logoActive"}>
      <h1>M&M</h1>
    </div>
  );
};

export default LogoComponent;
