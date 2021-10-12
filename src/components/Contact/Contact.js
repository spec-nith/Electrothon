import {
  faDiscord,
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./contact.css";

export default function Contact() {
  return (
    <div className="contact-icons">
      <a
        href="https://discord.gg/cjMMRs7tHs"
        id="discord"
        rel="noreferrer noopenor"
        target="_blank"
      >
        <FontAwesomeIcon icon={faDiscord} />
        <span>Discord </span>
      </a>

      <a
        href="https://www.facebook.com/spec.ece/"
        id="facebook"
        rel="noreferrer noopenor"
        target="_blank"
      >
        <FontAwesomeIcon icon={faFacebook} />
        <span>Facebook</span>
      </a>

      <a
        href="https://twitter.com/SPEC__NITH"
        id="twitter"
        rel="noreferrer noopenor"
        target="_blank"
      >
        <FontAwesomeIcon icon={faTwitter} />
        <span>Twitter </span>
      </a>

      <a
        href="https://instagram.com/s.p.e.c_nith?utm_source=ig_profile_share&amp;igshid=1dd01jvv7xk83"
        rel="noreferrer noopenor"
        target="_blank"
        id="instagram"
      >
        <FontAwesomeIcon icon={faInstagram} />
        <span>Instagram</span>
      </a>

      <a
        href="https://www.linkedin.com/in/s-p-e-c-nith-40214b197/"
        id="linkedin"
        rel="noreferrer noopenor"
        target="_blank"
      >
        <FontAwesomeIcon icon={faLinkedin} />
        <span>LinkedIn</span>
      </a>
    </div>
  );
}
