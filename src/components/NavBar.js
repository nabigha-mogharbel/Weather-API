import React from "react";
class NavBar extends React.Component {
  constructor(props){
    super(props)
    this.state={
      city: 'tripoli'
    }
  }
  handleChange(e){
    this.setState({city: e.target.value})
    console.log(e.target.value)
  }
  render() {
    return (
      <header id="header">
        <input
          name="city"
          type="text"
          className="input"
          placeholder="Type in a city name"
          onChange={e => {this.setState({city: e.target.value}); console.log('nav state', this.state.city)}}
        />
        <button id="btn" onClick={e=> {this.props.clickEvent(this.state.city)}}>
          Find Weather
        </button>
      </header>
    );
  }
}

export default NavBar;
