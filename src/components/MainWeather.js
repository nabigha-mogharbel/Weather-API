import React, { Component } from "react";
import mostlycloudy from '../img/weather-icons/mostlycloudy.svg'
import clear from "../img/weather-icons/clear.svg";
import cloudy from "../img/weather-icons/cloudy.svg";
import drizzle from "../img/weather-icons/drizzle.svg";
import fog from "../img/weather-icons/fog.svg";
import partlycloudy from "../img/weather-icons/partlycloudy.svg";
import rain from "../img/weather-icons/rain.svg";
import snow from "../img/weather-icons/snow.svg";
import storm from "../img/weather-icons/storm.svg";
import unknown from "../img/weather-icons/unknown.svg";
class MainWeather extends Component {
  constructor(props){
    super(props);
    this.state = {
      icons: {
        rain: rain,
        snow: snow,
        storm: storm,
        unknown: unknown,
        fog: fog,
        partlycloudy: partlycloudy,
        clouds: cloudy,
        drizzle: drizzle,
        clear: clear,
        mostlycloudy: mostlycloudy,
      },
    };
  }
  render() {
    return (
      <div id="current-weather">
        <img src={`${this.state.icons[this.props.src]}`} alt={`${this.props.desc}`} width={"300px"} />
        <p className="title white-title">{this.props.desc}</p>
        <p className="title big-title">
          <b>Temperature</b> {Math.round(this.props.minT) } &deg;C to {Math.round(this.props.maxT)} &deg;C
        </p>
        <p className="title medium-title">
          <b>Humidity</b> {this.props.humidity} % <b>Pressure</b> {this.props.pressure}
        </p>
      </div>
    );
  }
}
export default MainWeather;
