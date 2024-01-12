import React from "react";
import globe from "../../assets/globe.png";
const GlobePart = () => {
  return (
    <>
      <figure>
        <img className="img-fluid" src={globe} alt="" />
      </figure>
      <button className="btn border rounded-pill px-5">
        Explorer la Travel Map
      </button>
    </>
  );
};

export default GlobePart;
