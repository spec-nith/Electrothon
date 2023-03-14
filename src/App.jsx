import React, { Suspense } from "react";
import Hero from "./components/Hero/hero";
import Explore from "./components/Tracks_new/Track";
import "./App.css";
// import Footer from "./components/UI/Footer/Footer";
import Sponsors from "./components/Sponsors/Sponsors.js";
import SpeakersNew from "./components/Speaker/speaker";
// import Ellipse34 from "./components/Speaker/Ellipse34";
import Footer from "./components/Footer/footer";
import Card from "./components/Prizes/cards";
import Background from "./components/Background/bgstatic";
import "./mlh.css";
import FAQs from "./components/Faq/faq";

function App() {
  return (
    <div className="">
      <Background />
      <a
        id="mlh-trust-badge"
        className="mlh"
        href="https://mlh.io/apac?utm_source=apac-hackathon&utm_medium=TrustBadge&utm_campaign=2023-season&utm_content=white"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src="https://s3.amazonaws.com/logged-assets/trust-badge/2023/mlh-trust-badge-2023-white.svg"
          alt="Major League Hacking 2023 Hackathon Season"
          className="w-full"
        />
      </a>
      <div
        className="grid place-items-start md:place-items-center overflow-x-hidden"
        id="hero-section"
      >
        <Hero />
      </div>

      <div className="mx-6 mt-40 lg:mx-36">
        <Sponsors />
      </div>
      {/* <Ellipse34 /> */}
      <Explore />
      <Card />

      <Suspense fallback={<div>Loading...</div>}>
        <SpeakersNew />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <FAQs />
        <Footer />
      </Suspense>
    </div>
  );
}
export default App;
