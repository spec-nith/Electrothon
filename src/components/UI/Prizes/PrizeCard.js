import React from "react";
// import './prize.css';
import { podiumData } from "./prizesData";

import "swiper/swiper.min.css";
import "swiper/modules/pagination/pagination.min.css";
import "swiper/modules/navigation/navigation.min.css";

const [r, w, g] = podiumData;
const podium = [w, r, g];
const custom = {
  gridColumn: 1,
  gridRow: 1,
  backgroundColor: "#201621",
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
        className="grid rounded-8x1"
        ref={(node) => {
          this.node = node;
        }}
      >
        <div
          className={
            "bg-gray-800 text-white text-justify z-10 max-w-sm rounded overflow-hidden shadow-lg " +
            (this.state.show ? "block" : "hidden")
          }
          style={custom}
        >
          <div className="p-auto" style={{ paddingTop: this.props.data.h }}>
            <h2 className="text-center text-5xl pt-2 text-blue-900 ">Perks</h2>
            <ul className="list-disc p-8 text-4x1">
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
          <img
            style={this.props.data.cStyle}
            className="w-full"
            src={this.props.data.img}
            alt="Sunset in the mountains"
          />
          <div
            className="px-6 text-center min-h-40 pt-4 text-white"
            style={{ backgroundColor: "#1b141c" }}
          >
            <div className="font-bold text-2xl mb-2 ">
              {this.props.data.name}
            </div>
            <p className="text-lg pb-2">{this.props.data.amt}</p>
          </div>
          {/* <div
                  className="px-6 justify-end flex z-10 bg-blue-600 pb-2"
                  style={custom}
                >
                  <button
                    className="inline-block bg-blue-600 rounded-full px-3 py-1 text-3x1 font-semibold text-black mr-2 leading-normal tracking-tight"
                    onClick={this.handleClick}
                  >
                    Show More
                  </button>
                </div> */}
        </div>
      </div>
    );
  }
}

const Prizes = () => {
  const alignment = ["end", "center", "start"];
  return (
    <div className="flex flex-wrap overflow-hidden justify-center items-end ">
      {podiumData.map((data, index) => {
        return (
          <div
            className={
              "hidden md:flex my-4 overflow-hidden w-full md:w-1/3 items-center object-cover justify-" +
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
