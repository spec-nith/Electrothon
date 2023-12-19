import React, { Suspense, useState, useEffect } from "react";
import Hero from "./components/Hero/hero";
import Explore from "./components/Tracks_new/Track";
import "./App.css";
// import Footer from "./components/UI/Footer/Footer";
import Sponsors from "./components/Sponsors/Sponsors.js";
import SpeakersNew from "./components/Speaker/speaker";
import Organizers from "./components/Organizers/Organizers";
// import Ellipse34 from "./components/Speaker/Ellipse34";
import Footer from "./components/Footer/footer";
import Card from "./components/Prizes/cards";
import Background from "./components/Background/bgstatic";
import "./mlh.css";
import FAQs from "./components/Faq/faq";
import { NewMilestone } from "./components/newmilestones/NewMilestone";
import Timeline from "./components/Timeline_new/Timeline_new";
import { Event } from "./components/Events/Event";
import Challenges from "./components/Challenges/Challenges";
import MLHChallenges from "./components/Challenges/MLHChallenges";
import Animate from "./components/IntroAnimate/Animate";
import Gallary from "./components/gallary/gallary";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <React.Fragment>
      <div
        className={loading ? "" : "hidden"}
        style={{
          //   backgroundImage: `url("./loading_art.jpg")`,
          backgroundColor: "rgba(34, 30, 30)",
          //   backgroundBlendMode: "lighten",
          zIndex: "999999",
        }}
      >
        <Animate />
      </div>
      <div className={loading ? "hidden" : ""}>
        <Background />
        <a
          id="mlh-trust-badge"
          className="mlh"
          href="https://mlh.io/apac?utm_source=apac-hackathon&utm_medium=TrustBadge&utm_campaign=2023-season&utm_content=white"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://s3.amazonaws.com/logged-assets/trust-badge/2024/mlh-trust-badge-2024-white.svg"
            alt="Major League Hacking 2024 Hackathon Season"
            className="w-full"
          />
        </a>
        <div
          className="grid overflow-x-hidden place-items-start md:place-items-center"
          id="hero-section"
        >
          <Hero />
        </div>
        <div className="mx-6 mt-16 lg:mx-36">
          <Gallary />
          <Timeline />
          <Event />
          <Sponsors />
          <Explore />
          <Card />
          <Challenges />
          <MLHChallenges />
          <Suspense fallback={<div>Loading...</div>}>
            <SpeakersNew />
            <Organizers />
          </Suspense>
          <Suspense fallback={<div>Loading...</div>}>
            <FAQs />
            <Footer />
          </Suspense>
        </div>
      </div>
    </React.Fragment>
  );
}
export default App;
