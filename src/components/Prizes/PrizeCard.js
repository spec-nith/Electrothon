import React from "react";
// import './prize.css';
import { podiumData } from "./prizesData";

import "swiper/swiper.min.css";
import "swiper/modules/pagination/pagination.min.css";
import "swiper/modules/navigation/navigation.min.css";

const [r, w, g] = podiumData;
const podium = [w, r, g];
const custom = {
  backgroundColor: "rgba(20,15,20,0.35)",
};

class PodiumCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }

  handleClick = () => {
    if (!this.state.show) {
      document.addEventListener("click", this.handleOutsideClick, false);
    } else {
      document.removeEventListener("click", this.handleOutsideClick, false);
    }

    this.setState((prevState) => ({
      show: !prevState.show,
    }));
  };

  handleOutsideClick = (e) => {
    if (!this.node.contains(e.target)) this.handleClick();
  };

  render() {
    return (
      <div
        className="overflow-hidden relative"
        ref={(node) => {
          this.node = node;
        }}
      >
        <div
          className={
            "absolute transition-all text-white text-justify z-10 rounded overflow-hidden shadow-lg " +
            (this.state.show ? "top-0 h-full w-full" : "top-full")
          }
          style={{ background: "rgb(20, 20, 24)" }}
        >
          <div className="p-auto" style={{ paddingTop: this.props.data.h }}>
            <h2 className="text-center text-3xl md:text-5xl pt-2 text-white mt-8">
              Perks
            </h2>
            <ul className="list-disc p-4 md:p-8 text-sm md:text-4x1">
              {this.props.data.desc.map((bullets, index) => {
                return (
                  <li className="py-2 border-b-2 " key={index}>
                    {bullets}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div
          className="max-w-sm rounded overflow-hidden shadow-lg leading-normal tracking-tight"
          style={custom}
        >
          <picture>
            <source srcSet={this.props.data.webp} type="image/webp" />
            <img
              style={this.props.data.cStyle}
              className="w-full"
              src={this.props.data.img}
              alt="Sunset in the mountains"
            />
          </picture>
          <div
            className="px-6 text-center min-h-40 pt-4 text-white pb-12"
            style={{ backgroundColor: "#1b141c" }}
          >
            <div className="font-bold text-xl md:text-2xl md:mb-2 ">
              {this.props.data.name}
            </div>
            <p className="text-lg md:text-2xl pb-2 md:pb-4">
              {this.props.data.amt}
            </p>
          </div>
        </div>
        <button
          className={
            "absolute z-20 bottom-0 w-full p-2 text-3x1 font-semibold leading-normal tracking-tight transition-all" +
            (this.state.show
              ? " bg-white text-black"
              : " activeColor text-white")
          }
          onClick={this.handleClick}
        >
          {this.state.show ? "Hide" : "See More"}
        </button>
      </div>
    );
  }
}

const Prizes = () => {
  const alignment = ["justify-end", "justify-center", "justify-start"];
  return (
    <div className="flex flex-wrap overflow-hidden justify-center items-end ">
      {podiumData.map((data, index) => {
        return (
          <div
            className={
              "hidden md:flex my-4 overflow-hidden w-full md:w-1/3 items-center object-cover " +
              alignment[index]
            }
            key={index}
          >
            <PodiumCard data={data} />
          </div>
        );
      })}

      {podium.map((data, index) => {
        return (
          <div
            className="flex md:hidden my-4 overflow-hidden w-full md:w-1/3 items-center object-cover justify-center"
            key={index}
          >
            <PodiumCard data={data} />
          </div>
        );
      })}
    </div>
  );
};

export default Prizes;
