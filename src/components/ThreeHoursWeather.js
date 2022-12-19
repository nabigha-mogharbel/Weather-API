import React, { Component } from "react";
import mostlycloudy from "../img/weather-icons/mostlycloudy.svg";
class ThreeHoursWeather extends Component {
  render() {
    return (
      <div className="three-h-container">
        <p className="time">21:00</p>
        <img src={mostlycloudy} alt="mostlycloudy" width={"150px"} />
        <p className="temp">13&deg;C</p>
      </div>
    );
  }
}
export default ThreeHoursWeather;
