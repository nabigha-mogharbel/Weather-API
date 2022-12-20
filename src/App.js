import React, { Component } from "react";
import AllDayWeather from "./components/AllDayWeather";
import "./App.css";
import MainWeather from "./components/MainWeather";
import NavBar from "./components/NavBar";
import FakeWeather from "./data/FakeWeather.json";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "alstad",
      data: FakeWeather,
    };
    this.handleclick = this.handleclick.bind(this);
  }
  handleclick(e) {
    this.setState({ city: e });
    console.log("app state", this.state.city);
    let key = "70a28b505472e28686f6c86c0892daec";
    let city = e;
    let url = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=8&units=metric&appid=${key}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        let a = data;
        this.setState({ data: { ...a } });
        console.log("after fetch", this.state.data);
      })
      .catch((err) => console.log(err));
  }
  requestWeather() {
    let key = "70a28b505472e28686f6c86c0892daec";
    let city = this.state.city;
    let url = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=8&units=metric&appid=${key}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        let a = data;
        this.setState({ data: { ...a } });
        console.log("after fetch", this.state.data);
      })
      .catch((err) => console.log(err));
  }

  render() {
    // this.requestWeather();
    return (
      <div className="app">
        <NavBar clickEvent={this.handleclick} />
        <main>
          <MainWeather
            src={this.state.data.list[4].weather[0].main.toLowerCase()}
            desc={this.state.data.city.name}
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
