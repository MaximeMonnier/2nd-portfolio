import React, { useRef } from "react";

const Anchor = () => {
  const ref = useRef(null);
  const hiddenRef = useRef(null);

  return (
    <div className="container-anchor">
      <div className="slider" ref={ref}>
        {[...Array(25)].map((x, id) => {
          return <p>p</p>;
        })}
      </div>
    </div>
  );
};

export default Anchor;
