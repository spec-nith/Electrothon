import React, { useState, useEffect, Suspense } from "react";
import Header from "./components/UI/Header/Header";
import Intro from "./components/Hero/Hero";
// import Content from "./components/UI/Content/Content";
import About from "./components/About/About";
// import Judges from "./components/Judges/judges";
import Milestone from "./components/Milestone/milestone";
// import Workshop from "./components/Workshop/Workshop";
// import Speakers from "./components/Speakers/Speakers";
import MLHChallenges from "./components/Challenges/mlhChallenges";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import AOS from "aos";
import "aos/dist/aos.css";
import randomColor from "randomcolor";
import BackgroundStatic from "./components/UI/Background/bgstatic";
import "./mlh.css";

const Projects = React.lazy(() => import("./components/Themes/Themes"));
const Schedule = React.lazy(() => import("./components/Schedule/schedule"));
const Prizes = React.lazy(() => import("./components/Prizes/PrizeCarousel"));
const Challenges = React.lazy(() =>
  import("./components/Challenges/Challenges")
);
const Sponsors = React.lazy(() => import("./components/Sponsors/Sponsors"));
const MediaIcons = React.lazy(() =>
  import("./components/MediaIcons/mediaicons")
);
const FAQ = React.lazy(() => import("./components/FAQs/faq"));
const Footer = React.lazy(() => import("./components/UI/Footer/Footer"));

AOS.init({
  once: true,
});
export function AddLibrary() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "./bganimation.js";
    script.async = true;
    document.body.appendChild(script);
  });
}

const App = () => {
  const [loading, setLoading] = useState(false);
  let colour = randomColor();
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);
  return (
    <React.Fragment>
      {loading ? (
        <div
          className="flex justify-center nav-theme items-center w-full h-screen bg-cover"
          // style={{
          //   backgroundImage: `url("./loading_art.jpg")`,
          //   backgroundColor: "rgba(255,255,255,0.7)",
          //   backgroundBlendMode: "lighten",
          // }}
        >
          <ClimbingBoxLoader color={colour} loading={loading} size={25} />
        </div>
      ) : (
        <React.Fragment>
          <BackgroundStatic />
          <Header />
          <a
            id="mlh-trust-badge"
            className="mlh"
            href="https://mlh.io/seasons/2022/events?utm_source=apac-hackathon&utm_medium=TrustBadge&utm_campaign=2022-season&utm_content=gray"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://s3.amazonaws.com/logged-assets/trust-badge/2022/mlh-trust-badge-2022-white.svg"
              alt="Major League Hacking 2022 Hackathon Season"
              className="w-full"
            />
          </a>

          <div className="sm:mx-20">
            <Intro />
            <div className="container mx-auto px-4 text-justify">
              <section id="general-content">
                <About />
                <Milestone />
                {/* <Content /> */}
              </section>
              {/* <Judges /> */}
              {/* <Speakers/> */}
              <Suspense fallback={<div>Loading...</div>}>
                <Schedule />
                <Projects />
                {/* <ProbStatements /> */}
                <Prizes />
                <Challenges />
                <MLHChallenges />
              </Suspense>
              {/* <Workshop /> */}
              {/* <Judges /> */}
              <Suspense fallback={<div>Loading...</div>}>
                <Sponsors />
                <MediaIcons />
                {/* <Speakers/> */}
                <FAQ />
              </Suspense>
            </div>
          </div>
          <Suspense fallback={<div>Loading...</div>}>
            <Footer />
          </Suspense>
        </React.Fragment>
      )}
      {/* {AddLibrary()} */}
    </React.Fragment>
  );
};

export default App;
