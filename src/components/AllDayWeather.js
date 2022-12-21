import React, { Component } from "react";
import ThreeHoursWeather from "./ThreeHoursWeather";
class AllDayWeather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherList: this.props.dayW,
    };
  }
  render() {
    console.log("3-div");
    return (
      <div className="AllDayWeather" id="all-day-weather">
        {this.props.dayW.map((e) => (
          <ThreeHoursWeather
            key={e.dt_txt}
            weather={e}
          />
        ))}
      </div>
    );
  }
}
export default AllDayWeather;