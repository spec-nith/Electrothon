import React, { useState, useEffect } from "react";
import Header from "./components/UI/Header/Header";
import Footer from "./components/UI/Footer/Footer";
import Intro from "./components/Hero/Hero";
import Content from "./components/UI/Content/Content";
import About from "./components/About/About";
import FAQ from "./components/FAQs/faq";
// import Judges from "./components/Judges/judges";
import Milestone from "./components/Milestone/milestone";
// import Prizes from "./components/Prizes/prizes";
// import ProbStatements from "./components/Prob_statements/problems";
import Projects from "./components/Themes/Themes";
import Schedule from "./components/Schedule/schedule";
import Sponsors from "./components/Sponsors/Sponsors";
// import Workshop from "./components/Workshop/Workshop";
// import Speakers from "./components/Speakers/Speakers";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import AOS from "aos";
import "aos/dist/aos.css";
import randomColor from "randomcolor";
import BackgroundStatic from "./components/UI/Background/bgstatic";
import "./mlh.css";

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
    }, 2000);
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
                <Content />
              </section>
              {/* <Judges /> */}
              {/* <Speakers/> */}
              <Schedule />
              <Projects />
              {/* <ProbStatements /> */}
              {/* <Prizes /> */}
              {/* <Workshop /> */}
              {/* <Judges /> */}
              <Sponsors />
              {/* <Speakers/> */}
              <FAQ />
            </div>
          </div>
          <Footer />
        </React.Fragment>
      )}
      {/* {AddLibrary()} */}
    </React.Fragment>
  );
};

export default App;
