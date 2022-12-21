import React, { Component } from "react";
import AllDayWeather from "./components/AllDayWeather";
import "./App.css";
import MainWeather from "./components/MainWeather";
import NavBar from "./components/NavBar";
import FakeWeather from "./data/FakeWeather.json";
import ErrorHandler from "./components/ErrorHandler";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      isFetched:false,
      isError: false,
      error: {}
    };
    this.handleclick = this.handleclick.bind(this);
  }
  displayError(error){
    console.log('the error',error)
    this.setState({error: error})
  }
  handleclick(e) {
    console.log("app state", this.state.city);
    let key = "70a28b505472e28686f6c86c0892daec";
    let city = e;
    let url = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=8&units=metric&appid=${key}`;
    /*fetch(url)
      .then((response) => response.json())
      .then((data) => {
        let a = data;
        this.setState({ data: { ...a } }); 
        this.setState({ isFetched: false });
        console.log("after fetch", this.state.data);
      })
      .catch((err) => {this.displayError(err); this.setState({isError: true})});*/

    /*fetch(url)
    .then( response =>{
      if(!response.ok){
        this.setState({isFetched: false})
        console.log('err')
      }
      else{
        this.setState({isFetched: true})
        this.setState({data: response.json()})
      }
    }
    )
    .catch(err => this.setState({error: err}))*/
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if(data.cod!='200'){
          this.setState({isFetched: false, isError:true, error:data});
          console.log(data)
        }
        else{
        let a = data;
        this.setState({ data: { ...a } }); 
        this.setState({ isFetched: true, isError:false });
        console.log("after fetch", this.state.data);}
      })
      .catch((err) => {this.displayError(err); this.setState({isError: true})});
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
          {this.state.isError && <ErrorHandler msg={this.state.error.message} />}
        </main>
      </div>
    );
  }
}
export default App;
