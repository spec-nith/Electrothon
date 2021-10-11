import React from "react";
import Header from "./components/UI/Header/Header";
import Footer from "./components/UI/Footer/footer";
import Intro from "./components/UI/Intro/Intro";
import Content from "./components/UI/Content/Content";
import About from "./components/About/About";
import FAQ from "./components/FAQs/faq";
import Judges from "./components/Judges/judges";
import Milestone from "./components/Milestone/milestone";
import Prizes from "./components/Prizes/prizes";
import ProbStatements from "./components/Prob_statements/problems";
import Projects from "./components/Projects/Projects";
import Schedule from "./components/Schedule/schedule";
import Sponsors from "./components/Sponsors/Sponsors";
import Workshop from "./components/Workshop/Workshop";

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Intro />
      <div className="container mx-auto px-4">
        <About />
        <Content />
        <Milestone />
        <Schedule />
        <Projects />
        <ProbStatements />
        <Prizes />
        <Workshop />
        <Judges />
        <Sponsors />
        <FAQ />
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default App;
