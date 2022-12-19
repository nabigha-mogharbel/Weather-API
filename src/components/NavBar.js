import React from "react";
class NavBar extends React.Component {
  render() {
    return (
      <header id="header">
        <input
          name="city"
          type="text"
          className="input"
          placeholder="Type in a city name"
        />
        <button id="btn">
          Find Weather
        </button>
      </header>
    );
  }
}

export default NavBar;
