import React, { Component } from "react";
import "./App.css";
import NavbarFull from "./component/NavbarFull";
import MyMap from "./component/MyMap";
import DataContainer from "./component/DataContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavbarFull />
        <MyMap />
        <DataContainer />
      </div>
    );
  }
}

export default App;
