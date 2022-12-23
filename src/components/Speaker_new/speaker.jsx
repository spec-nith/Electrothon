import React, { lazy } from "react";
import styled from "styled-components";

import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import Ellipse34 from "./Ellipse34";

const Card = lazy(() => import("./card.jsx"));

const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 5rem 0;
`;

const Title = styled.h1`
  color: #fff;
  display: inline-block;
  font-size: calc(1rem + 1.5vw);
  margin-top: 1.5rem;
  position: relative;
  &::before {
    content: "";
    height: 1px;
    width: 50%;
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 0.5rem);
    /* or 100px */
    border-bottom: 2px solid var(--purple);
  }
`;

const Carousal = styled.div`
  width: 50vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media only Screen and (max-width: 40em) {
    width: 90vw;
    .slick-slider .slick-arrow {
      display: none;
    }
  }
  .slick-slider .slick-arrow:before {
    color: #fff;
    font-size: 1.5rem;
    @media only Screen and (max-width: 40em) {
      display: none;
    }
  }
  .slick-slider .slick-dots button:before {
    color: #fff;
    font-size: 1.5rem;
  }
  .slick-slide.slick-active {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0;
    padding: 0;
    margin-bottom: 3rem;
  }
`;

const SpeakersNew = () => {
  const settings = {
    dots: true,
    infinite: true,

    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Section>
      <div className="flex flex-col justify-center items-center">
        <Ellipse34 />
      </div>
      <Title className={`text-center text-white font-normal font-['Gugi']`}>
        Our Past Speakers!
      </Title>
      <Carousal>
        <Slider {...settings}>
          <Card
            text="TEDx Speaker | Former President of Frog design and Quirky"
            name="Doreen Lorenzo"
            image="doreen"
          />

          <Card
            text="TEDx speaker | Host - Walt Disney's Art Attack India."
            name="Gaurav Juyal"
            image="gaurav"
          />

          <Card
            text="Technopreneur | Ex-Google | Teacher of 100K+ Coders"
            name="Prateek Narang"
            image="prateek"
          />

          {/* <Card
            text="TEDx speaker | Host - Walt Disney's Art Attack India"
            name="Jenny (CodeCall)"
            image="gaurav"
          /> */}
        </Slider>
      </Carousal>
    </Section>
  );
};

export default SpeakersNew;
