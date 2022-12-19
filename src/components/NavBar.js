import React from "react";

class NavBar extends React.Component {
    render() { 
        return (
        <header id="header">
          <input
            name="city"
            type="text"
            className="input"
            onChange={this.handleInputChange}
            placeholder="Type in a city name"
          />
          <button onClick={() => console.log(this.state.city)}  id="btn">
            Find Weather
          </button>
        </header>
        );
    }
}
 
export default NavBar ;