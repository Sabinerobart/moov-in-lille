import React, { Component } from "react";
import "./App.css";
import NavbarFull from './component/NavbarFull';
import MyMap from "./component/MyMap";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavbarFull />
        <MyMap />
      </div>
    );
  }
}

export default App;
