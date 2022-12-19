import React, { Component } from "react";
import mostlycloudy from "./img/weather-icons/mostlycloudy.svg";
import clear from "./img/weather-icons/clear.svg";
import cloudy from "./img/weather-icons/cloudy.svg";
import drizzle from "./img/weather-icons/drizzle.svg";
import fog from "./img/weather-icons/fog.svg";
import partlycloudy from "./img/weather-icons/partlycloudy.svg";
import rain from "./img/weather-icons/rain.svg";
import snow from "./img/weather-icons/snow.svg";
import storm from "./img/weather-icons/storm.svg";
import unknown from "./img/weather-icons/unknown.svg";
import "./App.css";
import NavBar from "./components/NavBar";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "tripoli",
    };
  }
  render() {
    return (
      <div className="app">
        <NavBar/>
        <main>
        <div id="current-weather">
          <img src={mostlycloudy} alt="mostlycloud" width={'300px'}/>
          <p className="title white-title">overcast clouds</p>
          <p className="title big-title"><b>Temperature</b> 10&deg;C to 11&deg;C</p>
          <p className="title medium-title"><b>Humidity</b> 18% <b>Pressure</b> 1008.48</p>
        </div>
        <div id="all-day-weather">
            <div className="three-h-container">
              <p className="time">3:00</p>
              <img src={mostlycloudy} alt="mostlycouldy" width={'150px'}/>
              <p className="temp">8&deg;C</p>
            </div>
            <div className="three-h-container">
              <p className="time">6:00</p>
              <img src={mostlycloudy} alt="mostlycloudy" width={'150px'}/>
              <p className="temp">9&deg;C</p>
            </div>
            <div className="three-h-container">
              <p className="time">9:00</p>
              <img src={clear} alt="clear" width={'150px'}/>
              <p className="temp">14&deg;C</p>
            </div>
            <div className="three-h-container">
              <p className="time">12:00</p>
              <img src={clear} alt="clear" width={'150px'}/>
              <p className="temp">17&deg;C</p>
            </div>
            <div className="three-h-container">
              <p className="time">15:00</p>
              <img src={clear} alt="clear" width={'150px'}/>
              <p className="temp">18&deg;C</p>
            </div>
            <div className="three-h-container">
              <p className="time">18:00</p>
              <img src={clear} alt="clear"width={'150px'}/>
              <p className="temp">16&deg;C</p>
            </div>
            <div className="three-h-container">
              <p className="time">21:00</p>
              <img src={mostlycloudy} alt="mostlycloudy" width={'150px'}/>
              <p className="temp">13&deg;C</p>
            </div>
        </div>
        </main>
      </div>
    );
  }
}
export default App;