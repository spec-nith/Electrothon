import React, { useState, useEffect, Suspense } from "react";
import Hero from "./components/Hero_new/hero";
import Header from "./components/UI/Header/Header";
// import Explore from "./components/Tracks/Explore";
import "./App.css";
import "./App copy.css";
import Footer from "./components/UI/Footer/Footer";
import Sponsors from "./components/Sponsors/Sponsors.js";

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
    </>
  );
}
export default App;
