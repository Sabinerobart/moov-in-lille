import React, { Component } from "react";
import "./App.scss";
import NavbarFull from "./component/NavbarFull";
import DataContainer from "./component/DataContainer";
import Footer from './component/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavbarFull />
        <DataContainer />
        <Footer />
      </div>
    );
  }
}

export default App;