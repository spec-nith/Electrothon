import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import "./GoTop.css";

export default class ScrollToTop extends Component {
  _isMounted = false;

  constructor(props) {
    super(props);
    this.state = {
      is_visible: false,
    };
  }

  componentDidMount() {
    var scrollComponent = this;
    this._isMounted = true;
    document.addEventListener("scroll", function (e) {
      scrollComponent.toggleVisibility();
    });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  toggleVisibility() {
    if (this._isMounted === true) {
      if (window.pageYOffset > 200) {
        this.setState({
          is_visible: true,
        });
      } else {
        this.setState({
          is_visible: false,
        });
      }
    }
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  render() {
    const { is_visible } = this.state;
    return (
      <div className="scroll-to-top lg:block hidden">
        <div
          className={"tooltip " + (is_visible ? "hidden lg:block" : "hidden")}
          onClick={() => this.scrollToTop()}
        >
          <FontAwesomeIcon
            className="text-white text-lg"
            fixedWidth
            icon={faChevronUp}
          />
          <p className="tooltiptext">BackToTop</p>
        </div>
      </div>
    );
  }
}
