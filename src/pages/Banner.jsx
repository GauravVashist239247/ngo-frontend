import React from "react";
import cardimage from "../assets/card.png";
import cardimage1 from "../assets/card1.png";
import cardimage2 from "../assets/card2.png";

const BannerCard = ({ title, text, imgSrc }) => (
  <div className="col-md-4 text-center d-flex flex-column align-items-center">
    <h4 className="fs-4 fw-bolder">{title}</h4>
    <p className="my-1">{text}</p>
    <img src={imgSrc} alt={title} className="card_img my-2" />
  </div>
);

const Banner = () => {
  return (
    <div className="banner-section text-white py-5">
      
    </div>
  );
};

export default Banner;
