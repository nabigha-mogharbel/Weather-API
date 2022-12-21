import React, { Component } from "react";
import mostlycloudy from "../img/weather-icons/mostlycloudy.svg";
import clear from "../img/weather-icons/clear.svg";
import drizzle from "../img/weather-icons/drizzle.svg";
import fog from "../img/weather-icons/fog.svg";
import partlycloudy from "../img/weather-icons/partlycloudy.svg";
import rain from "../img/weather-icons/rain.svg";
import snow from "../img/weather-icons/snow.svg";
import storm from "../img/weather-icons/storm.svg";
class ThreeHoursWeather extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props.desc);
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
      <div className="three-h-container">
        <p className="time">{this.props.weather.dt_txt.slice(11, 16)}</p>
        <img
          src={`${renderImage(this.props.weather.weather[0].id)}`}
          alt={`${this.props.weather.weather[0].description}`}
          width={"150px"}
        />
        <p className="temp">{Math.round(this.props.weather.main.temp)} &deg;C</p>
      </div>
    );
  }
}
export default ThreeHoursWeather;
