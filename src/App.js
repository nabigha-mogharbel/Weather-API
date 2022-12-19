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
          <MainWeather />
          <AllDayWeather />
        </main>
      </div>
    );
  }
}
export default App;