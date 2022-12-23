import React, { useState, useEffect, Suspense } from "react";
import Hero from "./components/Hero_new/hero";
import Header from "./components/UI/Header/Header";
// import Explore from "./components/Tracks/Explore";
import "./App.css";
import "./App copy.css";
// import Footer from "./components/UI/Footer/Footer";
import Sponsors from "./components/Sponsors/Sponsors.js";
import SpeakersNew from "./components/Speaker_new/speaker";
import Ellipse34 from "./components/Speaker_new/Ellipse34";
import Footer from "./components/Footer_new/footer";
// import Accordion from "./components/Faq_new/faq";

function App() {
  return (
    <>
      <Header />
      <div className="grid place-items-start md:place-items-center">
        <Hero />
      </div>

      <div className="invisible ">
        <Sponsors />
      </div>

      <div>
        <Sponsors />
      </div>
      <Ellipse34 />
      <Suspense fallback={<div>Loading...</div>}>
        <SpeakersNew />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        {/* <Accordion /> */}
        <Footer />
      </Suspense>
    </>
  );
}
export default App;
