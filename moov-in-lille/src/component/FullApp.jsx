import React, { Component } from "react";
import "../App.scss";
import NavbarFull from "./NavbarFull";
import DataContainer from "./DataContainer";
import Footer from './Footer';

class FullApp extends Component {
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

export default FullApp;