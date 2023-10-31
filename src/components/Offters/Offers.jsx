import React from "react";
import "./Offers.css";
import exclusive_image from "../Assets/exclusive_image.png";
const Offers = () => {
  return (
    <div className="offers">
      <div className="offers-left">
        <h2>Exclusive</h2>
        <h2>Offers for you</h2>
        <p>ONLY ON BEST SELLES PRODUCTS</p>
        <button>Check Now</button>
      </div>
      <div className="offers-right">

      <img src={exclusive_image} alt="exclusive" />
      </div>
    </div>
  );
};

export default Offers;
