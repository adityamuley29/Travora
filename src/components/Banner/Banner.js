import React from "react";
import BannerLeft from "./BannerLeft";
import BannerRight from "./BannerRight";
import "./Banner.css";

function Banner() {
  const leftImage =
    "https://images.unsplash.com/photo-1563777389189-5e3564e5961c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";
  return (
    <div className="Banner-box">
      <BannerLeft img={leftImage} title="Ganpati Bappa Morya" />
      <BannerRight/>
    </div>
  );
}

export default Banner;
