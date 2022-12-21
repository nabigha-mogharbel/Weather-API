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
      data: {},
      isFetched:false
    };
    this.handleclick = this.handleclick.bind(this);
  }
  handleclick(e) {
    console.log("app state", this.state.city);
    let key = "70a28b505472e28686f6c86c0892daec";
    let city = e;
    let url = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=8&units=metric&appid=${key}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        let a = data;
        this.setState({ data: { ...a } }); 
        this.setState({ isFetched: true });
        console.log("after fetch", this.state.data);
      })
      .catch((err) => {console.log(err); this.setState({isFetched: false})});
  }

  render() {
    return (
      <div className="app">
        <NavBar clickEvent={this.handleclick} />
        <main>
          {this.state.isFetched && <MainWeather
            src={this.state.data.list[0].weather[0].main.toLowerCase()}
            desc={this.state.data.list[0].weather[0].description}
            minT={this.state.data.list[0].main.temp_min}
            maxT={this.state.data.list[0].main.temp_min}
            humidity={this.state.data.list[0].main.humidity}
            pressure={this.state.data.list[0].main.pressure}
          />}
          {this.state.isFetched && <AllDayWeather dayW={this.state.data.list.slice(1, 8)} />}
        </main>
      </div>
    );
  }
}
export default App;
