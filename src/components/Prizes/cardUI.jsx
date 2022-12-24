import React from "react";
import fullMoon from "./istockphoto-490557198-612x612-removebg-preview.png";
import "./card-style.css";
const Card = (props) => {
  return (
    <div className="card text-center">
      <div className="overflow">
        <img src={fullMoon} alt="fullMoon" className="card-img-top" />
      </div>
      <div className="card-body text-dark">
        <h4 className="card-title">First Prize</h4>
        <p className="card-text ">comming soon</p>
        <a href="#" class="button">
          See More
        </a>
      </div>
    </div>
  );
};
export default Card;
