import React, { Component } from "react";
import mostlycloudy from '../img/weather-icons/mostlycloudy.svg'
class MainWeather extends Component {
  render() {
    return (
      <div id="current-weather">
        <img src={mostlycloudy} alt="mostlycloud" width={"300px"} />
        <p className="title white-title">overcast clouds</p>
        <p className="title big-title">
          <b>Temperature</b> 10&deg;C to 11&deg;C
        </p>
        <p className="title medium-title">
          <b>Humidity</b> 18% <b>Pressure</b> 1008.48
        </p>
      </div>
    );
  }
}
export default MainWeather;
