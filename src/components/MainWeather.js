import React, { Component } from "react";
import mostlycloudy from "../img/weather-icons/mostlycloudy.svg";
import clear from "../img/weather-icons/clear.svg";
import drizzle from "../img/weather-icons/drizzle.svg";
import fog from "../img/weather-icons/fog.svg";
import partlycloudy from "../img/weather-icons/partlycloudy.svg";
import rain from "../img/weather-icons/rain.svg";
import snow from "../img/weather-icons/snow.svg";
import storm from "../img/weather-icons/storm.svg";
class MainWeather extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    function renderImage(e) {
      if (e < 300) {
        return storm;
      } else if (e >= 300 && e <= 499) {
        return drizzle;
      } else if (e >= 500 && e <= 599) {
        return rain;
      } else if (e >= 600 && e <= 699) {
        return snow;
      } else if (e >= 700 && e <= 799) {
        return fog;
      } else if (e === 800) {
        return clear;
      } else if (e === 801) {
        return partlycloudy;
      } else if (e >= 801 && e <= 805) {
        return mostlycloudy;
      }
    }
    return (
      <div id="current-weather">
        <img
          src={`${renderImage(this.props.currentW.weather[0].id)}`}
          alt={`${this.props.desc}`}
          width={"300px"}
        />
        <p className="title white-title">{this.props.currentW.weather[0].description}</p>
        <p className="title big-title">
          <b>Temperature</b> {Math.round(this.props.currentW.main.temp_min)} &deg;C to
          {Math.round(this.props.currentW.main.temp_max)} &deg;C
        </p>
        <p className="title medium-title">
          <b>Humidity</b> {this.props.currentW.main.humidity} % <b>Pressure</b>
          {this.props.currentW.main.pressure}
        </p>
      </div>
    );
  }
}
export default MainWeather;