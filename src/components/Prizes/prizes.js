import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import './prize.css';
import { faTrophy } from "@fortawesome/free-solid-svg-icons";
export default function prizes() {
  return (
    <div>
      <h1>prize</h1>
      <div className="card" onclick="this.classList.toggle('expanded')">
        <FontAwesomeIcon icon={faTrophy} />

        <div className="text1">
          <div className="text-content">
            <h1 className="title">OUR GOODS</h1>
            <div className="body-text">
              are delivered with the same high quality as decades ago
            </div>
          </div>
        </div>
        <svg
          className="chevron"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 35"
          width="30"
        >
          <path
            d="M5 30L50 5l45 25"
            fill="none"
            stroke="#000"
            stroke-width="5"
          />
        </svg>
      </div>
      <div className="card" onclick="this.classList.toggle('expanded')">
        <FontAwesomeIcon icon={faTrophy} />
        <div className="text2">
          <div className="text-content">
            <h1 className="title">OUR LABEL</h1>
            <div className="body-text">
              has stayed the same reliable brand for nearly a century
            </div>
          </div>
        </div>
        <svg
          className="chevron"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 35"
          width="30"
        >
          <path
            d="M5 30L50 5l45 25"
            fill="none"
            stroke="#000"
            stroke-width="5"
          />
        </svg>
      </div>
    </div>
  );
}
