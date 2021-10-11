import React from "react";
import "./themes.css";
import themeArray from "./themesdata.json";

export default function Projects() {
  return (
    <section id="problems" class="problem_body">
      <div class="problemContainer">
        <ul class="cards">
          {themeArray.map((e) => {
            return (
              <li class="card cards__item">
                <div class="card__frame">
                  <div class="card__picture"></div>
                  <h2 class="card__title">{e.title}</h2>
                </div>
                <div class="card__overlay"></div>
                <div class="card__content">
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
