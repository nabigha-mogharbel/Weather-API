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
    return (
      <div className="AllDayWeather" id="all-day-weather">
        {this.state.weatherList.map((e) => (
          <ThreeHoursWeather
            key={e.dt_txt}
            time={e.dt_txt}
            temp={e.main.temp}
            desc={e.weather[0].main.toLowerCase()}
          />
        ))}
      </div>
    );
  }
}
export default AllDayWeather;
