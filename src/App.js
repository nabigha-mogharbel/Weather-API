import React, { Component } from "react";
import AllDayWeather from "./components/AllDayWeather";
import "./App.css";
import MainWeather from "./components/MainWeather";
import NavBar from "./components/NavBar";
import FakeWeatherData from "./data/FakeWeather.json";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: FakeWeatherData,
    };
  }
componentDidMount(){
  console.log(this.state.data.list[4])
}
  render() {
    return (
      <div className="app">
        <NavBar />
        <main>
          <MainWeather
            src={this.state.data.list[4].weather[0].main.toLowerCase()}
            desc={this.state.data.list[4].weather[0].description}
            minT={this.state.data.list[4].main.temp_min}
            maxT={this.state.data.list[4].main.temp_min}
            humidity={this.state.data.list[4].main.humidity}
            pressure={this.state.data.list[4].main.pressure}
          />
          <AllDayWeather dayW={this.state.data.list.slice(5, 12)} />
        </main>
      </div>
    );
  }
}
export default App;
