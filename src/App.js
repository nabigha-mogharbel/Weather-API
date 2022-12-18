import React, { Component } from "react";
import "./App.css";
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
          <div id="current-weather">
            <img src={"http://placekitten.com/250/250"} alt="kitty" />
            <p className="title white-title">overcast clouds</p>
            <p className="title big-title">
              <b>Temperature</b> 10&deg;C to 11&deg;C
            </p>
            <p className="title medium-title">
              <b>Humidity</b> 18% <b>Pressure</b> 1008.48
            </p>
          </div>
          <div id="all-day-weather">
            <div className="three-h-container">
              <p className="time">03:00</p>
              <img src={"http://placekitten.com/100/100"} alt="kitty" />
              <p className="temp">8&deg;C</p>
            </div>
            <div className="three-h-container">
              <p className="time">06:00</p>
              <img src={"http://placekitten.com/100/100"} alt="kitty" />
              <p className="temp">9&deg;C</p>
            </div>
            <div className="three-h-container">
              <p className="time">09:00</p>
              <img src={"http://placekitten.com/100/100"} alt="kitty" />
              <p className="temp">14&deg;C</p>
            </div>
            <div className="three-h-container">
              <p className="time">12:00</p>
              <img src={"http://placekitten.com/100/100"} alt="kitty" />
              <p className="temp">17&deg;C</p>
            </div>
            <div className="three-h-container">
              <p className="time">15:00</p>
              <img src={"http://placekitten.com/100/100"} alt="kitty" />
              <p className="temp">18&deg;C</p>
            </div>
            <div className="three-h-container">
              <p className="time">18:00</p>
              <img src={"http://placekitten.com/100/100"} alt="kitty" />
              <p className="temp">16&deg;C</p>
            </div>
            <div className="three-h-container">
              <p className="time">21:00</p>
              <img src={"http://placekitten.com/100/100"} alt="kitty" />
              <p className="temp">13&deg;C</p>
            </div>
          </div>
        </main>
      </div>
    );
  }
}
export default App;
