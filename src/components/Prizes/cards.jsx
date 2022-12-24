import React, { Component } from "react";
import Card from "./cardUI";
import "./card-style.css";

class Cards extends Component {
  render() {
    return (
      <div className="container">
        <div className={`text-center text-white font-normal font-['Gugi']`}>
          <p className="text-6xl m-0">Prizes</p>
        </div>
        <div className="row">
          <div className="col-md-3 cardss">
            <Card />
          </div>
          <div className="col-md-3">
            <Card />
          </div>
          <div className="col-md-3">
            <Card />
          </div>
        </div>
      </div>
    );
  }
}

export default Cards;
