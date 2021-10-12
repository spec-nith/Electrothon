import React from "react";
import "./themes.css";
import themeArray from "./themesdata.json";

export default function Projects() {
  return (
    <section id="themes" className="problem_body">
      <div className="problemContainer">
        <ul className="cards">
          {themeArray.map((e) => {
            return (
              <li className="card cards__item" key={e.title + Math.random()}>
                <div className="card__frame">
                  <div className="card__picture"></div>
                  <h2 className="card__title">{e.title}</h2>
                </div>
                <div className="card__overlay"></div>
                <div className="card__content">
                  <h2>{e.title}</h2>
                  <p>{e.content}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
