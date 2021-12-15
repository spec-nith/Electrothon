import React from "react";
import { faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./SpeakerCard.css";

const SpeakerCard = ({ speaker }) => {
  return (
    <React.Fragment>
      <div className="speaker-section">
        <div className="container">
          <div className="">
            <div className="speaker-card bg-black bg-opacity-25">
              <div className="speaker-picture">
                <img
                  className="h- object-cover speaker-img"
                  src="https://picsum.photos/130/130?image=1027"
                  alt="speaker"
                />
              </div>
              <div className="">
                <h3 className="speaker-heading text-white">{speaker.name}</h3>
              </div>
              <ul className="speaker-social">
                <li>
                  <a href={speaker.instagram} aria-hidden="true">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </li>
                <li>
                  <a href={speaker.lnikedin} aria-hidden="true">
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default SpeakerCard;
