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
import AllDayWeather from "./components/AllDayWeather";
import "./App.css";
import MainWeather from "./components/MainWeather";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "tripoli",
    };
  }

  handleInputChange = (e) => {
    this.setState({ city: e.target.value });
  };
  render() {
    return (
      <div className="app">
        <header id="header">
          <input
            name="city"
            type="text"
            className="input"
            onChange={this.handleInputChange}
            placeholder="Type in a city name"
          />
          <button onClick={() => console.log(this.state.city)} id="btn">
            Find Weather
          </button>
        </header>
        <main>
          <MainWeather />
          <AllDayWeather />
        </main>
      </div>
    );
  }
}
export default App;
