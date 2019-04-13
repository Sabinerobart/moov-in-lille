import React, { Component } from "react";
import "./App.scss";
import NavbarFull from "./component/NavbarFull";
import DataContainer from "./component/DataContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavbarFull />
        <DataContainer />
      </div>
    );
  }
}

export default App;
