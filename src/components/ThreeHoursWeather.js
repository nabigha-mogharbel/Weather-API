import React, { Component } from "react";
import mostlycloudy from "../img/weather-icons/mostlycloudy.svg";
import clear from "../img/weather-icons/clear.svg";
import cloudy from "../img/weather-icons/cloudy.svg";
import drizzle from "../img/weather-icons/drizzle.svg";
import fog from "../img/weather-icons/fog.svg";
import partlycloudy from "../img/weather-icons/partlycloudy.svg";
import rain from "../img/weather-icons/rain.svg";
import snow from "../img/weather-icons/snow.svg";
import storm from "../img/weather-icons/storm.svg";
import unknown from "../img/weather-icons/unknown.svg";
class ThreeHoursWeather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      icons: {
        rain: rain,
        snow: snow,
        storm: storm,
        unknown: unknown,
        fog: fog,
        partlycloudy: partlycloudy,
        cloudy: cloudy,
        drizzle: drizzle,
        clear: clear,
        mostlycloudy: mostlycloudy,
      },
    };
  }
  render() {
    return (
      <div className="three-h-container">
        <p className="time">{this.props.time.slice(11, 16)}</p>
        <img
          src={`${this.state.icons[this.props.desc]}`}
          alt={`${this.props.desc}`}
          width={"150px"}
        />
        <p className="temp">{Math.round(this.props.temp - 273)} &deg;C</p>
      </div>
    );
  }
}
export default ThreeHoursWeather;
