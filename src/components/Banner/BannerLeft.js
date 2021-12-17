import React from "react";

function BannerLeft({ img, title }) {
  return (
    <div className="bannerLeftBox">
      <div className="leftImageBox">
        <img className="leftImage" src={img} alt="Image Here!" />
      </div>

      <h1>{title}</h1>
    </div>
  );
}

export default BannerLeft;
