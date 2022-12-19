import React, { Component } from "react";
import ThreeHoursWeather from "./ThreeHoursWeather";
class AllDayWeather extends Component {
  render() {
    return <div className="AllDayWeather" id="all-day-weather">
        <ThreeHoursWeather/>
        <ThreeHoursWeather/>
        <ThreeHoursWeather/>
        <ThreeHoursWeather/>
        <ThreeHoursWeather/>
        <ThreeHoursWeather/>
        <ThreeHoursWeather/>

    </div>;
  }
}
export default AllDayWeather;
