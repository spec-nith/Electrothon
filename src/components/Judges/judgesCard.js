import React from "react";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./judges.css";

const JudgesCard = ({ judge }) => {
  return (
    <React.Fragment>
      <div className="judge-section">
        <div className="judge-card">
          <div
            className="judge-card-header"
            style={{ backgroundImage: `url(${judge.image})` }}
          >
            <div className="judge-card-header-slanted-edge">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 200">
                <path className="judge-polygon" d="M-20,200,1000,0V200Z" />
              </svg>
            </div>
          </div>

          <div className="judge-card-body">
            <h2 className="judge-name">{judge.name}</h2>
            <h4 className="judge-job-title">{judge.post}</h4>

            <div className="judges-social-accounts">
              <a href={judge.lnikedin} aria-hidden="true">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default JudgesCard;
