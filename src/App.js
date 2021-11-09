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
// import Sponsors from "./components/Sponsors/Sponsors";
// import Workshop from "./components/Workshop/Workshop";
import Contact from "./components/Contact/Contact";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import AOS from "aos";
import "aos/dist/aos.css";
import randomColor from "randomcolor";
AOS.init({
  once: true,
});

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
          <Header />
          <div className="sm:mx-20">
            <Intro />
            <div className="container mx-auto px-4 text-justify">
              <section id="general-content">
                <About />
                <Milestone />
                <Content />
              </section>
              <Schedule />
              <Projects />
              {/* <ProbStatements /> */}
              {/* <Prizes /> */}
              {/* <Workshop /> */}
              {/* <Judges /> */}
              {/* <Sponsors /> */}
              <FAQ />
            </div>
          </div>
          <Contact />
          <Footer />
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default App;
