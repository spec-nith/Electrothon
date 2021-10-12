import React from "react";
import Header from "./components/UI/Header/Header";
import Footer from "./components/UI/Footer/Footer";
import Intro from "./components/Hero/Hero";
import Content from "./components/UI/Content/Content";
import About from "./components/About/About";
import FAQ from "./components/FAQs/faq";
// import Judges from "./components/Judges/judges";
import Milestone from "./components/Milestone/milestone";
// import Prizes from "./components/Prizes/prizes";
import ProbStatements from "./components/Prob_statements/problems";
import Projects from "./components/Themes/Themes";
import Schedule from "./components/Schedule/schedule";
// import Sponsors from "./components/Sponsors/Sponsors";
// import Workshop from "./components/Workshop/Workshop";
import Contact from "./components/Contact/Contact";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({
  once: true,
});

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Intro />
      <Contact />
      <div className="container mx-auto px-4">
        <section id="general-content">
          <About />
          <Content />
          <Milestone />
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
      <Footer />
    </React.Fragment>
  );
};

export default App;
