import React from "react";
const Banner = ({ title, description }) => {
  return (
    <div className="banner">
      <div className="banner-content wrapper">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Banner;
