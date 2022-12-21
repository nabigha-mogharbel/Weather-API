import React, { Component } from "react";
import AllDayWeather from "./components/AllDayWeather";
import "./App.css";
import MainWeather from "./components/MainWeather";
import NavBar from "./components/NavBar";
import ErrorHandler from "./components/ErrorHandler";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      data: {},
      isFetched: false,
      isError: false,
      error: {},
    };
    this.getWeatherData = this.getWeatherData.bind(this);
  }
  displayError(error) {
    console.log("the error", error);
    this.setState({ error: error });
  }
  getWeatherData(city) {
    if (city) {
      console.log("app state", this.state.city);
      let key = "70a28b505472e28686f6c86c0892daec";
      let url = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=8&units=metric&appid=${key}`;
      this.setState({ isLoading: true, isError: false, isFetched:false });
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          if (data.cod != "200") {
            this.setState({
              isFetched: false,
              isError: true,
              error: data,
              isLoading: false,
            });
            console.log(data);
          } else {
            this.setState({ data: data });
            this.setState({
              isFetched: true,
              isError: false,
              isLoading: false,
            });
            console.log("after fetch", this.state.data);
          }
        })
        .catch((err) => {
          this.displayError(err);
          this.setState({ isError: true, isLoading:false, isFetched:false });
        });
    } else {
      this.displayError({ cod: 400, message: "Please enter a city" });
      this.setState({ isError: true,isLoading:false, isFetched:false });
    }
  }

  render() {
    return (
      <div className="app">
        <NavBar clickEvent={this.getWeatherData} />
        <main>
          {this.state.isFetched && (
            <MainWeather
              currentW={this.state.data.list[0]}
            />
          )}
          {this.state.isFetched && (
            <AllDayWeather dayW={this.state.data.list.slice(1, 8)} />
          )}
          {this.state.isError && (
            <ErrorHandler msg={this.state.error.message} />
          )}
          {this.state.isLoading && (
            <div className="Loading">
              <p>Loading data...</p>
            </div>
          )}
        </main>
      </div>
    );
  }
}
export default App;